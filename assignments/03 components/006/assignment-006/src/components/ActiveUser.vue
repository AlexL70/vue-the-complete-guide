<template>
    <form @submit.prevent="emitAddUser">
        <div class="mb-3">
            <label for="name" class="form-label">User name:</label>
            <input type="text" class="form-control" id="name" v-model="activeUser.name">
        </div>
        <div class="mb-3">
            <label for="age" class="form-label">User age:</label>
            <input type="number" class="form-control" id="age" v-model="activeUser.age">
        </div>
        <button type="submit" class="btn btn-primary">Add User</button>
    </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { User } from "./../types/User"
export default defineComponent({
    emits: {
        "add-user": function (u: User) {
            if (u.name.length > 2 && u.age > 0 && u.age <= 100)
                return true;
            else {
                console.log("New user's properties are out of bounds.");
                return false;
            }
        }
    },
    data() {
        return {
            activeUser: {
                id: "",
                name: "",
                age: 0,
            } as User,
        };
    },
    methods: {
        emitAddUser(): void {
            this.$emit("add-user", this.activeUser);
        }
    }
});
</script>