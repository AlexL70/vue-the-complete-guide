<template>
  <section>
    <h2>{{ title }}</h2>
    <h3>${{ price }}</h3>
    <p>{{ description }}</p>
  </section>
</template>

<script>
import { inject, computed } from 'vue';

export default {
  setup(props) {
    const product = inject('products').value.find((p) => p.id === props.pid);

    const title = computed(() => product.title);
    const price = computed(() => product.price);
    const description = computed(() => product.description);

    return { title, price, description };
  },
  props: ["pid"],
};
</script>


<style scoped>
section {
  margin: 3rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>