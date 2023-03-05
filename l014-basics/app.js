const app = Vue.createApp({
    data() {
        return {
            courseGoalA: "Finish <em>the course</em> and learn Vue!",
            courseGoalB: "Master Vue and build <em>amazing</em> apps!",
            vueLink: "https://vuejs.org"
        };
    },
    methods: {
        outputGoal() {
            const randomNo = Math.random();
            if (randomNo < 0.5)
                return this.courseGoalA;
            else
                return this.courseGoalB;
        },
    },
});

app.mount("#user-goal");