<template>
    <ul>
        <learning-resource v-for="r in resources" :key="r.id" :res="r"></learning-resource>
    </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import type { Resource } from "./../../types/DtoInterfaces"
import LearningResource from "./LearningResource.vue";
export default defineComponent({
    props: {
        resources: {
            type: Object as PropType<Array<Resource>>,
            required: true,
        }
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