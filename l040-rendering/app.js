const app = Vue.createApp({
  data() {
    return {
      goals: [],
      currentGoalValue: "",
    };
  },
  methods: {
    addGoal() {
      if (this.currentGoalValue.length > 0) {
        this.goals.push(this.currentGoalValue);
        this.currentGoalValue = "";
      }
    }
  }
});

app.mount('#user-goals');
