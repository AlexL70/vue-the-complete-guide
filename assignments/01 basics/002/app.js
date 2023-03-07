Vue.createApp({
    data() {
        return {
            firstValue: "",
            secondValue: "",
            secondValueConfirmed: "",
        };
    },
    methods: {
        showAlert() {
            alert("Attention! Air alert! Proceed to the shelter!!!");
        },
        onFirstValueChanged(event) {
            this.firstValue = event.target.value;
        },
        onSeconOutpurKeydown(event) {
            this.secondValue = event.target.value;
            if (event.code === "Enter")
                this.secondValueConfirmed = event.target.value;
        }
    },
}).mount("#assignment");