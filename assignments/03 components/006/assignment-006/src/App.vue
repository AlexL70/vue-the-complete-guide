<template>
    <div class="row">
        <h1>Assignment 006</h1>
    </div>
    <div class="row">
        <active-user @add-user="onAddUser"></active-user>
    </div>
    <div class="row">
        <h1 class="col-lg-12 mt-3">List of users</h1>
        <user-data v-for="u in users" :user="u" @delete-user="onDeleteUser"></user-data>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { User } from './types/User';
export default defineComponent({
    data() {
        return {
            users: [
                {
                    id: "aabd033c-24c0-46f8-8044-43731fb5e948",
                    name: "Jesus",
                    age: 33,
                },
                {
                    id: "e6dfd42c-392d-4bc5-9fc0-6a904dcc7e33",
                    name: "Moses",
                    age: 44,
                }
            ] as User[],
        };
    },
    methods: {
        onAddUser(newUser: User) {
            const nu = {
                id: crypto.randomUUID(),
                name: newUser.name,
                age: newUser.age,
            } as User;
            this.users.push(nu);
            newUser.name = "";
            newUser.age = 0;
        },
        onDeleteUser(userId: string) {
            this.users = this.users.filter(u => u.id !== userId);
        }
    }
});
</script>
