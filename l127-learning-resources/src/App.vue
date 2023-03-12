<template>
    <ul>
        <learning-resource v-for="r in stroredResources" :key="r.id" :res="r"></learning-resource>
    </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { Resource } from "./types/DtoInterfaces"
import LearningResource from "./components/learning-resources/LearningResource.vue"

export default defineComponent({
    name: "App",
    components: {
        LearningResource,
    },
    data() {
        return {
            stroredResources: [
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
});
</script>