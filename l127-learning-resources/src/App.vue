<template>
    <the-header title="Remember Me!"></the-header>
    <the-resource :resources="storedResources"></the-resource>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { Resource } from "./types/DtoInterfaces";
import TheResource from "./components/learning-resources/TheResources.vue";
import TheHeader from "./components/layouts/TheHeader.vue"

export default defineComponent({
    name: "App",
    components: {
        TheResource, TheHeader,
    },
    data() {
        return {
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
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
    box-sizing: border-box;
}

html {
    font-family: 'Roboto', sans-serif;
}

body {
    margin: 0;
}
</style>
