<template>
  <section class="container">
    <h2>{{ fullName }}</h2>
    <h3>{{ user.age }}</h3>
    <button @click="changeAge">Change age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName">
      <input type="text" placeholder="Last Name" v-model="lastName">
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive, ref, computed } from 'vue';
import type { User } from "@/types"

const user = reactive<User>({
  name: "Maximilian",
  age: 31,
});

const firstName = ref<string>("");
const lastName = ref<string>("")
const fullName = computed<string>(() => {
  return `${firstName.value}${firstName.value.length > 0 && lastName.value.length > 0 ? " " : ""}${lastName.value}`
});

function changeAge(): void {
  user.age = 32
}

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
