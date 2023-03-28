<template>
  <the-header></the-header>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheHeader from "@/components/layout/TheHeader.vue";
import userStore from "@/store/user";
export default defineComponent({
  setup() {
    const users = userStore();
    return { users };
  },
  components: {
    TheHeader
  },
  computed: {
    autoLogout() {
      return this.users.getIsAutoLoggetOut;
    }
  },
  created() {
    this.users.autoLogin();
  },
  watch: {
    autoLogout(newValue, oldValue) {
      if (!oldValue && newValue)
        this.$router.replace("/");
    }
  }
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}

.route-enter-from {
  opacity: 0;
  transform: scale(0.6) translateY(-100px);
}

.route-leave-to {
  opacity: 0;
  transform: scale(0.6) translate(100px);
}

.rouet-enter-active {
  transition: all 0.3s ease-in;
}

.route-leave-active {
  transition: all 0.3s ease-out;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: scale(1) translateY(0);
}
</style>
