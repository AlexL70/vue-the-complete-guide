Vue.createApp({
    data() {
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false,
        };
    },
    methods: {
        boxSelected(box) {
            console.log(`Hit box ${box}`);
            if (box === "A")
                this.boxASelected = !this.boxASelected;
            else if (box === "B")
                this.boxBSelected = !this.boxBSelected;
            else if (box === "C")
                this.boxCSelected = !this.boxCSelected;
        },
    },
    computed: {
        boxAClasses() {
            return { demo: true, active: this.boxASelected };
        }
    },
}).mount("#styling");