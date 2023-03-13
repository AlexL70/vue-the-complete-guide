<template>
    <base-card>
        <base-button @click="setSelectedTab('stored-resources')" type="button" :mode="storedResButtonMode">
            Stored Resources</base-button>
        <base-button @click="setSelectedTab('add-resource')" type="button" :mode="addResButtonMode">
            Add Resource</base-button>
    </base-card>
    <keep-alive>
        <component :is="selectedTab" @add-resource="onAddResource"></component>
    </keep-alive>
</template>

<script lang="ts">
export type SelectedTab = "stored-resources" | "add-resource";
import type { Resource } from "./../../types/DtoInterfaces"
import { defineComponent } from 'vue';
import StoredResources from "./StoredResources.vue";
import AddResource from "./AddResource.vue";
export default defineComponent({
    data() {
        return {
            selectedTab: "stored-resources" as SelectedTab,
            storedResources: [
                {
                    id: "official-guide",
                    title: "Official guide",
                    description: "The official Vue.js documentation",
                    link: "https://vuejs.org",
                },
                {
                    id: "google",
                    title: "Google",
                    description: "Learn to google...",
                    link: "https://google.com",
                }
            ] as Array<Resource>,
        };
    },
    provide() {
        return {
            resources: this.storedResources,
        };
    },
    methods: {
        setSelectedTab(tab: SelectedTab) {
            this.selectedTab = tab;
        },
        onAddResource(r: Resource) {
            const newRes = {
                id: crypto.randomUUID(),
                title: r.title,
                description: r.description,
                link: r.link,
            } as Resource;
            this.storedResources.unshift(newRes);
            r.title = "";
            r.description = "";
            r.link = "";
            this.selectedTab = "stored-resources";
        }
    },
    computed: {
        storedResButtonMode(): "flat" | "" {
            return this.selectedTab === 'stored-resources' ? '' : 'flat';
        },
        addResButtonMode(): "flat" | "" {
            return this.selectedTab === 'add-resource' ? '' : 'flat';
        }
    },
    components: {
        AddResource, StoredResources,
    },
});
</script>