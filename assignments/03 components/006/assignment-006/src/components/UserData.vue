<template>
    <div class="col col-md-7">
        <h2>{{ user.name }}</h2>
    </div>
    <div class="col col-md-3">
        <h3>{{ user.age }}</h3>
    </div>
    <div class="col col-md-2">
        <button @click="emitDeleteUser">Delete</button>
    </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import type { User } from "./../types/User"
export default defineComponent({
    props: {
        user: {
            type: Object as PropType<User>,
            required: true,
        },
    },
    emits: {
        "delete-user": function (userId: string) { return true; },
    },
    methods: {
        emitDeleteUser() {
            this.$emit("delete-user", this.user.id);
        }
    }
});
</script>