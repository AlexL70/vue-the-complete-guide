const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
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
      this.confirmedName = "";
    },
  },
});

app.mount('#events');
