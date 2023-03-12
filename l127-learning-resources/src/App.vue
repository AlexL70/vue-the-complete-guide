<template>
    <ul>
        <li v-for="r in stroredResources" :key="r.id">
            <a :href="r.link">{{ r.title }}</a>
        </li>
    </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { Resource } from "./types/DtoInterfaces"

export default defineComponent({
    name: "App",
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