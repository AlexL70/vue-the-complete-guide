const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    outputFullName() {
      return this.name === "" ? "" : `${this.name} Levinson`;
    },
    add(num) {
      this.counter += num;
    },
    sub(num) {
      this.counter -= num;
    },
    onConrirmName() {
      this.confirmedName = this.name;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount('#events');
