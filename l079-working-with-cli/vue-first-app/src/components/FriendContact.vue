<template>
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails"> {{ detailsAreVisible ? "Hide details" : "Show details" }}</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong>{{ friend.phone }}</li>
            <li><strong>Email:</strong>{{ friend.email }}</li>
        </ul>
    </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import type { Friend } from './../interfaces/Friend';

export default defineComponent({
    data() {
        return {
            detailsAreVisible: false,
        };
    },
    props: {
        friend: {
            type: Object as PropType<Friend>,
            required: true,
            default: {
                id: "manuel",
                name: "Manuel Lorenz",
                phone: "0123 456 789",
                email: "manuel@localhost.com",
            }
        }
    },
    methods: {
        toggleDetails(): void {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    },
});
</script>