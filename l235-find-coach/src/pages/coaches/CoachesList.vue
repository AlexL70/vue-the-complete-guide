<template>
    <div>
        <base-dialog :show="showError" title="Error loading list of coaches!" @close="handleError">
            <p>{{ error }}</p>
        </base-dialog>
        <section>
            <coach-filter @change-filter="onChangeFilter"></coach-filter>
        </section>
        <section>
            <base-card>
                <div class="controls">
                    <base-button mode="outline" @click="loadCoaches">Refresh list</base-button>
                    <base-button link to="/register" v-if="canRegister">Register as Coach</base-button>
                    <base-button link to="/auth?redirect=register" v-else-if="canLogin">
                        Login to register as a coach
                    </base-button>
                </div>
                <ul v-if="hasCoaches">
                    <coach-item v-for="coach in filteredCoaches" :key="coach.id" :coach="coach"></coach-item>
                </ul>
                <div v-else-if="isLoading">
                    <base-spinner></base-spinner>
                </div>
                <h3 v-else>No coaches found!</h3>
            </base-card>
        </section>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import coachesStore from "@/store/coaches";
import userStore from "@/store/user";
import type { Coach } from "@/types/dto";
import type { SpecTagFilter } from "@/types/internal";
import CoachItem from "@/components/coaches/CoachItem.vue";
import CoachFilter from "@/components/coaches/CoachFilter.vue";
export default defineComponent({
    setup() {
        const users = userStore();
        const coaches = coachesStore();

        return { users, coaches };
    },
    components: {
        CoachItem, CoachFilter,
    },
    data() {
        return {
            error: null as (string | null),
            isLoading: false,
            activeFilters: {
                backend: true,
                frontend: true,
                career: true,
            } as SpecTagFilter,
        };
    },
    computed: {
        filteredCoaches(): Coach[] {
            return this.coaches.getCoaches.filter(coach => {
                if (this.activeFilters.backend && coach.areas.includes("backend"))
                    return true;
                if (this.activeFilters.frontend && coach.areas.includes("frontend"))
                    return true;
                if (this.activeFilters.career && coach.areas.includes("career"))
                    return true;
                return false;
            });
        },
        hasCoaches(): boolean {
            return !this.isLoading && this.coaches.hasCoaches;
        },
        canRegister() {
            return !this.isLoading && this.users.isAuthenticated && !this.coaches.isCoach;
        },
        canLogin() {
            return !this.isLoading && !this.users.isAuthenticated;
        },
        showError(): boolean {
            return this.error !== null && this.error.length > 0;
        },
    },
    methods: {
        onChangeFilter(updatedFilters: SpecTagFilter) {
            this.activeFilters = updatedFilters;
        },
        async loadCoaches() {
            this.isLoading = true;
            try {
                await this.coaches.loadCoaches()
            } catch (error: any) {
                this.error = error.message || "Something went wrong!";
            }
            this.isLoading = false;
        },
        handleError() {
            this.error = null;
        }
    },
    created() {
        // Reaload data if last loading was more than 30 seconds ago
        const oldTimestamp = this.coaches.lastFetched;
        const currTimestamp = new Date().getTime();
        if (oldTimestamp === null || currTimestamp - oldTimestamp >= 30000)
            this.loadCoaches();
    },
});
</script>

<style scoped>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

.controls {
    display: flex;
    justify-content: space-between;
}
</style>