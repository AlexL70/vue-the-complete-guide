<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item v-for="member in members" :key="member.id" :name="member.fullName" :role="member.role"></user-item>
    </ul>
    <router-link to="/teams/t2">Go to Team 2</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  props: ["teamId"],
  inject: ["users", "teams"],
  components: {
    UserItem
  },
  data() {
    return {
      teamName: "",
      members: [],
    };
  },
  methods: {
    loadTeamMembers(teamId) {
      const selectedTeam = this.teams.find(t => t.id === teamId);
      this.teamName = selectedTeam.name;
      const members = selectedTeam.members;
      const selectedMembers = [];
      for (const member of members) {
        const user = this.users.find(user => user.id === member);
        if (user)
          selectedMembers.push(user);
      }
      this.members = selectedMembers;
    },
  },
  created() {
    this.loadTeamMembers(this.teamId);
  },
  beforeRouteUpdate(to, from, next) {
    // This could be used to call loadTeamMembers
    // instead of watching teamId property, but this way
    // we would make th component dependent on router
    console.log("TeamMembers component beforeRouteUpdate");
    console.log(to, from);
    next();
  },
  watch: {
    teamId(newValue) {
      this.loadTeamMembers(newValue);
    }
  }
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>