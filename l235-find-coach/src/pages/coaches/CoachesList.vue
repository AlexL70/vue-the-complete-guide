<template>
    <section>
        <h2>FILTER</h2>
    </section>
    <section>
        <div class="controls">
            <button>Refresh list</button>
            <router-link to="/register">Register as Coach</router-link>
        </div>
        <ul v-if="hasCoaches">
            <li v-for="coach in filteredCoaches" :key="coach.id">
                {{ coach.firstName }} {{ coach.lastName }}
            </li>
        </ul>
        <h3 v-else>No coaches found!</h3>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import coachesStore from "../../store/coaches";
import { mapStores } from "pinia";
import type { Coach } from "@/types/dto";
export default defineComponent({
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