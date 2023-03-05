const app = Vue.createApp({
    data() {
        return {
            courseGoal: "Finish the course and learn Vue!",
            vueLink: "https://vuejs.org"
        };
    },
    methods: {
        outputGoal() {
            const randomNo = Math.random();
            if (randomNo < 0.5)
                return "Learn Vue!";
            else
                return "Master Vue!";
        },
    },
});

app.mount("#user-goal");