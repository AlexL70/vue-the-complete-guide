<template>
    <div>
        <h2>{{ fullName }}</h2>
        <h3>{{ userAge }}</h3>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed, inject, type Ref } from "vue";
export default defineComponent({
    setup(props, context) {
        const fullName = computed(() => {
            return `${props.firstName}${props.firstName.length > 0 && props.lastName.length > 0 ? " " : ""}${props.lastName}`;
        });
        console.log(context);
        const userAge = inject<Ref<number>>("userAge");
        // emitting custom events from Options API
        //context.emit("my-event", "some-argument"); // the same as this.$emit("my-event", "some-argument"); return { fullName };
        return { fullName, userAge };
    },
    props: {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
    }
});
</script>