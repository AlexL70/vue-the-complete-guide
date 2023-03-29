<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3 v-if="goalObj.show">{{ goalObj.goal }}</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toggleGoal">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>


<script>
// Options API
export default ({
  data() {
    return {
      goalObj: {
        goal: "To learn Vue.js as good as I can easily create mid-size app in one day by myself.",
        show: true,
      },
    };
  },
  methods: {
    toggleGoal() {
      this.goalObj.show = !this.goalObj.show;
    },
  },
});
</script>

<!--script setup>
// Composition API – using separate refs
import { ref } from "vue";
const mainCourseGoal = ref("To learn Vue.js as good as I can easily create mid-size app in one day by myself.");
const showGoal = ref(true);
function toggleGoal() {
  showGoal.value = !showGoal.value;
}
</script-->

<!--script setup>
// Composition API – using reactive object
// Using ref object would be the same down to
// replacint "reactive" to "ref" everywhere
import { reactive } from "vue"
const goalObj = reactive({
  goal: "To learn Vue.js as good as I can easily create mid-size app in one day by myself.",
  show: true,
});
function toggleGoal() {
  goalObj.show = !goalObj.show;
}
</script-->



<style>
html {
  font-family: sans-serif;
}

body {
  margin: 3rem;
  text-align: center;
}
</style>