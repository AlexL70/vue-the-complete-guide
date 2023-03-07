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
    },
    removeGoal(index) {
      this.goals.splice(index, 1)
    }
  }
});

app.mount('#user-goals');
