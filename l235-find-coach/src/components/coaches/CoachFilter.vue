<template>
    <base-card>
        <h2>Find Your Coach</h2>
        <span class="filter-optioin">
            <input type="checkbox" id="frontend" checked @change="setFilter" />
            <label for="frontend">Frontend</label>
        </span>
        <span class="filter-optioin">
            <input type="checkbox" id="backend" checked @change="setFilter" />
            <label for="backend">Backend</label>
        </span>
        <span class="filter-optioin">
            <input type="checkbox" id="career" checked @change="setFilter" />
            <label for="career">Career</label>
        </span>

    </base-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { SpecTagFilter } from "@/types/internal"
export default defineComponent({
    emits: ["change-filter"],
    data() {
        return {
            filters: {
                frontend: true,
                backend: true,
                career: true,
            } as SpecTagFilter,
        };
    },
    methods: {
        setFilter(event: Event) {
            const input = event.target as HTMLInputElement;
            const updatedFilters = {
                ...this.filters,
                [input.id]: input.checked,
            } as SpecTagFilter;
            this.filters = updatedFilters;
            this.$emit("change-filter", updatedFilters);
        },
    }
});
</script>

<style scoped>
h2 {
    margin: 0.5rem 0;
}

.filter-option {
    margin-right: 1rem;
}

.filter-option label,
.filter-option input {
    vertical-align: middle;
}

.filter-option label {
    margin-left: 0.25rem;
}

.filter-option.active label {
    font-weight: bold;
}
</style>