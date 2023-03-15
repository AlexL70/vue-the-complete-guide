<template>
  <button @click="confirmInput">Confirm</button>
  <button @click="emulateSavingChanges">Save changes</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data() {
    return {
      changesSaved: false,
    };
  },
  methods: {
    confirmInput() {
      // do something important
      // need to navigate to teams
      this.$router.push({ name: "teams", query: { sort: "asc" } });
    },
    emulateSavingChanges() {
      this.changesSaved = true;
    },
  },
  beforeRouteEnter(to, from, next) {
    console.log("Before entering UserList component.", to, from);
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log("UsersList component before route leave.");
    console.log(to, from);
    if (this.changesSaved) {
      next();
    } else {
      let wantsToLeave = confirm("Are you sure you want to leave the page? All unsaved data will be lost!");
      next(wantsToLeave);
    }
  },
  unmounted() {
    console.log("Unmounted UserList component");
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>