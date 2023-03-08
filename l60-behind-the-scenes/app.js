const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
  },
});

app.mount('#app');

Vue.createApp({
  data() {
    return {
      favouriteMeal: "Pizza",
    };
  },
}).mount('#app2');

const data = {
  message: "Hello!",
  longMessage: "Hello! World!",
};

const handler = {
  set(target, key, value) {
    console.log(target);
    console.log(key);
    console.log(value);
    if (key == "message")
      target.longMessage = `${value} World!`
  }
};

const proxy = new Proxy(data, handler);

proxy.message = "Hello!!!";
console.log(proxy.longMessage);

//let message = "Hello!";
//let longMessage = message + "World!";
//console.log(longMessage);
//message = "Hello!!!!!! "
//console.log(longMessage);