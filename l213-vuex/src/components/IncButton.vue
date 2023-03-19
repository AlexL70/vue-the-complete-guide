<template>
    <button @click="incCounter">Add 1</button>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    methods: {
        ...mapActions({ incCounter: "incCounter" }),
        //incCounter() {
        //    this.$store.commit("incCounter");
        //}
    }
}
</script>
