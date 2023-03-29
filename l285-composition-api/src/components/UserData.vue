<template>
    <div>
        <h2>{{ fullName }}</h2>
        <h3>{{ user.age }}</h3>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed, type PropType } from "vue";
import type { User } from "@/types";
export default defineComponent({
    setup(props, context) {
        const fullName = computed(() => {
            return `${props.user.firstName}${props.user.firstName.length > 0 && props.user.lastName.length > 0 ? " " : ""}${props.user.lastName}`;
        });
        console.log(context);
        // emitting custom events from Options API
        //context.emit("my-event", "some-argument"); // the same as this.$emit("my-event", "some-argument");
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