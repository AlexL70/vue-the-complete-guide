<template>
  <section class="container">
    <user-data v-if="showUserData" :first-name="firstName" :last-name="lastName"></user-data>
    <button @click="changeAge">Change age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName">
      <input type="text" placeholder="Last Name" ref="lastNameInput">
      <button @click="setLastName">Set Last Name</button>
      <button @click="toggleUserData">Toggle User Data</button>
    </div>
  </section>
</template>

<script setup lang="ts">
import UserData from "@/components/UserData.vue";
import { ref, computed, watch, provide } from 'vue';

const userAge = ref<number>(31);
const firstName = ref<string>("");
const lastName = ref<string>("")
const showUserData = ref<boolean>(true);

const lastNameInput = ref<HTMLInputElement | null>(null);
provide("userAge", userAge);

const fullName = computed<string>(() => {
  return `${firstName.value}${firstName.value.length > 0 && lastName.value.length > 0 ? " " : ""}${lastName.value}`
});

watch([fullName, userAge], (newVal, oldVal) => { console.log("User changed! It was:", oldVal, "But now it is:", newVal) });

function changeAge(): void {
  userAge.value = 32
}
function setLastName(): void {
  lastName.value = lastNameInput.value?.value ?? "";
}
function toggleUserData() {
  showUserData.value = !showUserData.value;
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
