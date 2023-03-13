<template>
    <ul>
        <learning-resource v-for="r in resources" :res="r"></learning-resource>
    </ul>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import type { Resource } from "./../../types/DtoInterfaces"
import LearningResource from "./LearningResource.vue";
export default defineComponent({
    inject: {
        resources: {
            from: "resources",
            type: Object as PropType<Array<Resource>>,
        },
    },
    components: {
        LearningResource,
    }
});
</script>

<style scoped>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
    margin: auto;
    max-width: 40rem;
}
</style>