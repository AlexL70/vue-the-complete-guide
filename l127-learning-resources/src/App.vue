<template>
    <the-header title="Remember Me!"></the-header>
    <the-resource></the-resource>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheResource from "./components/learning-resources/TheResources.vue";
import TheHeader from "./components/layouts/TheHeader.vue"

export default defineComponent({
    name: "App",
    components: {
        TheResource, TheHeader,
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
