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
    onNameChanged(event) {
      this.name = event.target.value;
    },
    onSubmitForm(event) {
      alert("Submitted!");
    },
    onConrirmName() {
      this.confirmedName = this.name;
    },
  },
});

app.mount('#events');
