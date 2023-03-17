<template>
    <ul>
        <li v-for="u in users" :key="u" @click="removeUser(u)">{{ u }}</li>
    </ul>
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
            console.log(u);
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
</style>