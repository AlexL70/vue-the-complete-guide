const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastname: "",
      //fullname: "",
      confirmedName: "",
    };
  },
  watch: {
    counter(value) {
      if (this.counter > 50 || this.counter < -50)
        this.counter = 0;
    }
    //  name(value) {
    //    this.fullname = `${value} ${this.lastname}`;
    //  },
    //  lastname(value) {
    //    this.fullname = `${this.name} ${value}`;
    //  }
  },
  computed: {
    fullname() {
      // console.log("Calculating full name...");
      if (this.name === "" && this.lastname === "")
        return "";
      else if (this.name === "")
        return this.lastname
      else if (this.lastname === "")
        return this.name
      else return `${this.name} ${this.lastname}`
    },
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
    },
  },
});

app.mount('#events');
