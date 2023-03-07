Vue.createApp({
    data() {
        return {
            name: "Alexander Levinson",
            age: 52,
            cossackImg: "https://upload.wikimedia.org/wikipedia/en/4/49/Cossack_Badura.jpg?20070228212317",
            imgDescription: "Cossack the bandura-player by an anonymous folk artist. Oil on canvas."
        };
    },
    methods: {
        ageIn5Years() {
            return this.age + 5;
        }
    },
}
).mount("#assignment");