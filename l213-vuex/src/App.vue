<template>
  <base-container title="Vuex">
    <the-counter></the-counter>
    <button @click="incCounter"> Add 1 </button>
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
      this.$store.commit("incCounter");
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
