<template>
    <base-card>
        <base-button @click="setSelectedTab('stored-resources')">Stored Resources</base-button>
        <base-button @click="setSelectedTab('add-resource')">Add Resource</base-button>
    </base-card>
    <component :is="selectedTab"></component>
</template>

<script lang="ts">
export type SelectedTab = "stored-resources" | "add-resource";
import { defineComponent } from 'vue';
import StoredResources from "./StoredResources.vue";
import AddResource from "./AddResource.vue";
export default defineComponent({
    data() {
        return {
            selectedTab: "stored-resources" as SelectedTab,
        };
    },
    methods: {
        setSelectedTab(tab: SelectedTab) {
            this.selectedTab = tab;
        }
    },
    components: {
        AddResource, StoredResources,
    },
});
</script>