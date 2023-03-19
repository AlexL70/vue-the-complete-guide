<template>
    <button v-if="isAuth" @click="logout">Logout</button>
    <button v-else @click="login">Login</button>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';
export default {
    computed: {
        ...mapGetters({ isAuth: "userIsAuthenticated" }),
    },
    methods: {
        ...mapActions(["login", "logout"]),
    }
}
</script>