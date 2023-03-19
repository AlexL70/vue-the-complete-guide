<template>
    <h3> {{ counter }} </h3>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        //...mapGetters(["getCounter"])
        ...mapGetters({ counter: "getCounter" })
        //counter() {
        //    return this.$store.getters.getCounter;
        //},
    },
}
</script>