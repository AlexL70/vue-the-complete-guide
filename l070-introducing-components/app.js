Vue.createApp({
    data() {
        return {
            friends: [
                {
                    id: "manual",
                    name: "Manual Lorenz",
                    phone: "01234 5678 991",
                    email: "manual@localhost.com",
                },
                {
                    id: "julie",
                    name: "Julie Jones",
                    phone: "09876 543 221",
                    email: "julie@localhost.com",
                },
            ],
        };
    },
}).mount("#app");