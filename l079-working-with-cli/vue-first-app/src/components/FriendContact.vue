<template>
    <li>
        <h2>{{ name }} {{ isFavourite ? "(favourite)" : "" }}</h2>
        <button @click="toggleIsFavourite"> {{ isFavourite ? "Make not" : "Make" }} favourite</button>
        <br>
        <button @click="toggleDetails"> {{ detailsAreVisible ? "Hide" : "Show" }} details</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong>{{ phoneNumber }}</li>
            <li><strong>Email:</strong>{{ emailAddress }}</li>
        </ul>
        <button @click="deleteFriend">Delete</button>
    </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        id: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: String,
            required: true,
        },
        emailAddress: {
            type: String,
            required: true,
        },
        isFavourite: {
            type: [Boolean, Number],
            required: false,
            default: false,
            validator(value: any) {
                return value === true || value === false || value === 0 || value === 1
            }
        },
    },
    //emits: ["toggle-favourite"],
    emits: {
        "toggle-favourite": function (id: string) {
            if (id) {
                return true;
            }
            else {
                console.log("Warning! 'toggle-favourite' event has been emitted without id!");
                return false;
            }
        },
        "delete-friend": function (id: string) {
            if (id) {
                return true;
            } else {
                console.log("Warning! 'delete-friend' event has been emitted without id!");
                return false;
            }
        }
    },
    data() {
        return {
            detailsAreVisible: false,
        };
    },
    methods: {
        toggleDetails(): void {
            this.detailsAreVisible = !this.detailsAreVisible;
        },
        toggleIsFavourite(): void {
            this.$emit("toggle-favourite", this.id);
        },
        deleteFriend(): void {
            this.$emit("delete-friend", this.id);
        }
    },
});
</script>

