Vue.createApp({
    data() {
        return {
            taskList: [],
            currTask: "",
            listIsVisible: true,
            toggleCaption: "Hide list"
        };
    },
    methods: {
        addTask() {
            if (this.currTask.length > 0) {
                this.taskList.push(this.currTask);
                this.currTask = "";
            }
        },
        toggleList() {
            this.listIsVisible = !this.listIsVisible;
            if (this.listIsVisible)
                this.toggleCaption = "Hide list";
            else
                this.toggleCaption = "Show list";
        }
    }
}).mount("#assignment");