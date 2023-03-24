<template>
    <base-dialog :show="error && error.length > 0" title="Error loading list of coaches!" @close="handleError">
        <p>{{ error }}</p>
    </base-dialog>
    <section>
        <coach-filter @change-filter="onChangeFilter"></coach-filter>
    </section>
    <section>
        <base-card>
            <div class="controls">
                <base-button mode="outline" @click="loadCoaches">Refresh list</base-button>
                <base-button link to="/register" v-if="!isCoach">Register as Coach</base-button>
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
</template>

<script lang="ts">
import { defineComponent } from "vue";
import coachesStore from "@/store/coaches";
import { mapStores } from "pinia";
import type { Coach } from "@/types/dto";
import type { SpecTagFilter } from "@/types/internal";
import CoachItem from "@/components/coaches/CoachItem.vue";
import CoachFilter from "@/components/coaches/CoachFilter.vue";
export default defineComponent({
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
        ...mapStores(coachesStore),
        filteredCoaches(): Coach[] {
            return this.coachesStore.getCoaches.filter(coach => {
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
            return !this.isLoading && this.coachesStore.hasCoaches;
        },
        isCoach() {
            return this.isLoading || this.coachesStore.isCoach;
        },
    },
    methods: {
        onChangeFilter(updatedFilters: SpecTagFilter) {
            this.activeFilters = updatedFilters;
        },
        async loadCoaches() {
            this.isLoading = true;
            try {
                await this.coachesStore.loadCoaches()
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
        if (!this.coachesStore.lastFetched)
            return;
        const oldTimestamp = this.coachesStore.lastFetchTimestamp ?? 0;
        const currTimestamp = new Date().getTime();
        if (currTimestamp - oldTimestamp >= 30000)
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