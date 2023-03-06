Vue.createApp({
    data() {
        return {
            count: 0,
        };
    },
    methods: {
        inc(step) {
            this.count += step;
        }
    },
    computed: {
        countRepresentation() {
            if (this.count < 37)
                return "Not there yet";
            else if (this.count > 37)
                return "Too much!";
            else
                return 37;
        }
    },
    watch: {
        count() {
            that = this;
            if (!this.alreadySet) {
                // this is to avoid setting second timed out reset
                this.alreadySet = true;
                setTimeout(function () {
                    that.count = 0;
                    // after count is reset next change will
                    // initiate next timed out reset again
                    that.alreadySet = false;
                }, 5000);
            }
        },
    }
}).mount("#assignment");