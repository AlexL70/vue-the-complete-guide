const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  methods: {
    add(num) {
      this.counter += num;
    },
    sub(num) {
      this.counter -= num;
    },
    onNameChanged(event) {
      this.name = event.target.value;
    }
  },
});

app.mount('#events');
