<template>
  <div>
    <TheHeader />
    <!--the-header></!--the-header-->
    <badge-list></badge-list>
    <user-info :full-name="activeUser.name" :info-text="activeUser.description" :role="activeUser.role"></user-info>
    <course-goals>
      <!-- for default slot, template here is not necessary; #default attribute
      could have been just used on parent (<course-goal>) element -->
      <template #default="slotProps">
        <h3>{{ slotProps.item }}</h3>
        <p>{{ slotProps.anotherProp }}</p>
      </template>
    </course-goals>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';
import CourseGoals from "./components/CourseGoals.vue";
export default {
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  components: {
    TheHeader, UserInfo, BadgeList, CourseGoals,
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>