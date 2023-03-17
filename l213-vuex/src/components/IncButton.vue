<template>
    <button @click="incCounter">Add 1</button>
</template>

<script>
export default {
    methods: {
        incCounter() {
            this.$store.commit("incCounter");
        }
    }
}
</script>
