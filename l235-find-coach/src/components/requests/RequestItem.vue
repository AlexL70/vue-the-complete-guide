<template>
    <li>
        <div><a :href="emailLink">Reply: {{ req.email }}</a></div>
    </li>
    <p>{{ req.message }}</p>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import type { MessageToCoach } from "@/types/dto";
export default defineComponent({
    props: {
        req: {
            type: Object as PropType<MessageToCoach>,
            required: true,
        },
    },
    computed: {
        emailLink(): string {
            return `mailto: ${this.req.email}`;
        },
    }
});
</script>

<style scoped>
li {
    margin: 1rem 0;
    border: 1px solid #ccc;
    padding: 1rem;
}

a {
    color: #3d008d;
    text-decoration: none;
    font-weight: bold;
}

a:hover,
a:active {
    color: #8d007a;
}

p {
    margin: 0.5rem 0 0 0;
}
</style>