<template>
    <transition-group tag="ul" name="user-list">
        <li v-for="u in users" :key="u" @click="removeUser(u)">{{ u }}</li>
    </transition-group>
    <div>
        <input type="text" v-model="currUser" />
        <button @click="addUser()">Add User</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            users: ["Alex", "Tom", "Ann", "Justing", "Chester"],
            currUser: "",
        };
    },
    methods: {
        addUser() {
            this.users.unshift(this.currUser);
            this.currUser = "";
        },
        removeUser(u) {
            let index = this.users.findIndex(usr => usr == u);
            this.users.splice(index, 1);
        },
    },
}
</script>

<style scoped>
ul {
    list-style: none;
    margin: 1rem 0;
    padding: 0;
}

li {
    border: 1px solid #ccc;
    padding: 1rem;
    text-align: center;
}

.user-list-enter-from {
    opacity: 0;
    transform: translateX(-30px);
}

.user-list-enter-active {
    transition: all 0.5s ease-out;
}

.user-list-enter-to .user-list-leave-from {
    opacity: 1;
    transform: translateX(0);
}

.user-list-leave-active {
    transition: all 0.5s ease-in;
}

.user-list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
</style>
