<template>
  <section class="container">
    <h2>{{ user.name }}</h2>
    <h3>{{ user.age }}</h3>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { User } from "@/types"
const user = ref<User>({
  name: "Maximilian",
  age: 33,
});
const userName = ref<string>("Maximilian");
const userAge = ref<number>(33);
setTimeout(() => {
  user.value.name = "Alexander";
  user.value.age = 52;
}, 2000)
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

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
