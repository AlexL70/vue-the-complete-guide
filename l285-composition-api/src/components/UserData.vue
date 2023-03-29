<template>
    <h2>{{ fullName }}</h2>
    <h3>{{ user.age }}</h3>
</template>

<script lang="ts">
import { defineComponent, computed, type PropType } from "vue";
import type { User } from "@/types";
export default defineComponent({
    setup(props) {
        const fullName = computed(() => {
            return `${props.user.firstName}${props.user.firstName.length > 0 && props.user.lastName.length > 0 ? " " : ""}${props.user.lastName}`;
        });
        return { fullName };
    },
    props: {
        user: {
            type: Object as PropType<User>,
            required: true,
        }
    }
});
</script>