<template>
    <form @submit.prevent="sumbitData">
        <div>
            <label for="name">Name</label>
            <input type="text" name="name" v-model="newFriend.name">
        </div>
        <div>
            <label for="phone">Phone number</label>
            <input type="tel" name="phone" v-model="newFriend.phone">
        </div>
        <div>
            <label for="email">Email address</label>
            <input type="email" name="email" v-model="newFriend.email">
        </div>
        <div>
            <button type="submit">Add contact</button>
        </div>
    </form>
</template>

<script lang="ts">
import type { Friend } from '@/interfaces/Friend';
import { defineComponent } from 'vue';
export default defineComponent({
    data() {
        return {
            newFriend: {
                name: "",
                phone: "",
                email: "",
            } as Friend,
        };
    },
    emits: {
        "add-contact": function (newFriend: Friend) {
            if (newFriend.name.length === 0 || newFriend.email.length === 0 || newFriend.phone.length === 0) {
                console.log("Not all of three mandatory fields are filled in when creating new friend!");
                return false;
            } else
                return true;
        },
    },
    methods: {
        sumbitData(): void {
            this.$emit("add-contact", this.newFriend);
        },
    }
});
</script>