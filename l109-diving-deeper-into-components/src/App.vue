<template>
  <div>
    <TheHeader />
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
    <component :is="selectedComponent"></component>
    <!--the-header></!--the-header-->
    <!--badge-list></badge-list>
    <user-info :full-name="activeUser.name" :info-text="activeUser.description" :role="activeUser.role"></user-info>
    <course-goals-->
    <!-- for default slot, template here is not necessary; #default attribute
      could have been just used on parent (<course-goal>) element -->
    <!--template #default="slotProps">
        <h3>{{ slotProps.item }}</h3>
        <p>{{ slotProps.anotherProp }}</p>
      </template>
    </course-goals-->
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
//import BadgeList from './components/BadgeList.vue';
//import UserInfo from './components/UserInfo.vue';
//import CourseGoals from "./components/CourseGoals.vue";
import ActiveGoals from "./components/ActiveGoals.vue";
import ManageGoals from "./components/ManageGoals.vue";
export default {
  data() {
    return {
      selectedComponent: "active-goals",
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods: {
    setSelectedComponent(component) {
      this.selectedComponent = component;
    }
  },
  components: {
    TheHeader,
    //UserInfo, BadgeList, CourseGoals,
    ManageGoals, ActiveGoals
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