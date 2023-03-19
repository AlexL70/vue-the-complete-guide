<template>
  <base-container title="Vuex" v-if="isAuth">
    <the-counter></the-counter>
    <the-norm-counter></the-norm-counter>
    <button @click="incCounter"> Add 5 </button>
    <inc-button></inc-button>
  </base-container>
  <base-container title="Authentication">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import TheNormCounter from './components/TheNormCounter.vue';
import IncButton from './components/IncButton.vue';
import UserAuth from './components/UserAuth.vue'
import { mapGetters } from 'vuex';
export default {
  components: {
    BaseContainer, TheCounter, TheNormCounter, IncButton, UserAuth
  },
  methods: {
    incCounter() {
      // commented out code works as good as used in this method
      // it is matter of taste wich approach to use
      //this.$store.commit("addToCounter", { value: 5 });
      this.$store.dispatch({
        type: "cm/increase",
        value: 5,
      });
    },
  },
  computed: {
    ...mapGetters({ isAuth: "userIsAuthenticated" }),
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
