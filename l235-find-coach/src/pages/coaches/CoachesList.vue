<template>
    <section>
        <h2>FILTER</h2>
    </section>
    <section>
        <base-card>
            <div class="controls">
                <base-button mode="outline">Refresh list</base-button>
                <base-button link to="/register">Register as Coach</base-button>
            </div>
            <ul v-if="hasCoaches">
                <coach-item v-for="coach in filteredCoaches" :key="coach.id" :coach="coach"></coach-item>
            </ul>
            <h3 v-else>No coaches found!</h3>
        </base-card>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import coachesStore from "../../store/coaches";
import { mapStores } from "pinia";
import type { Coach } from "@/types/dto";
import CoachItem from "@/components/coaches/CoachItem.vue";
export default defineComponent({
    components: {
        CoachItem,
    },
    computed: {
        ...mapStores(coachesStore),
        filteredCoaches(): Coach[] {
            return this.coachesStore.getCoaches;
        },
        hasCoaches(): boolean {
            return this.coachesStore.hasCoaches;
        }
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