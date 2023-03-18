<template>
  <base-container title="Vuex">
    <the-counter></the-counter>
    <button @click="incCounter"> Add 5 </button>
    <inc-button></inc-button>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import IncButton from './components/IncButton.vue';
export default {
  components: {
    BaseContainer, TheCounter, IncButton,
  },
  methods: {
    incCounter() {
      // commented out code works as good as used in this method
      // it is matter of taste wich approach to use
      //this.$store.commit("addToCounter", { value: 5 });
      this.$store.commit({
        type: "addToCounter",
        value: 5,
      });
    },
  },
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
