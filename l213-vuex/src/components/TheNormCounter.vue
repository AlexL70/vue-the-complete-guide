<template>
  <h3> Normalized: {{ counter }} </h3>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.getters["cm/getNormalizedCounter"];
    },
  },
}
</script>