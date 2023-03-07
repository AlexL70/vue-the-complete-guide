Vue.createApp({
    data() {
        return {
            styleP1: "",
            isVisible: true,
            p2BGColor: "",
        };
    },
    computed: {
        p1Classes() {
            let styles = [];
            if (this.styleP1 !== "")
                styles.push(this.styleP1);
            if (this.isVisible)
                styles.push("visible");
            else
                styles.push("hidden");
            return styles;
        },
        p2Style() {
            if (this.p2BGColor !== "")
                return { backgroundColor: this.p2BGColor };
            else
                return {};
        }
    },
    methods: {
        setStyleP1(event) {
            this.styleP1 = event.target.value;
        },
        toggleP1() {
            this.isVisible = !this.isVisible;
        },
        setP2BGColor(event) {
            this.p2BGColor = event.target.value;
        }
    }
}).mount("#assignment");