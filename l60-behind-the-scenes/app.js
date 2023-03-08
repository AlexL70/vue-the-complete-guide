const app = Vue.createApp({
  data() {
    return {
      //currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    //saveInput(event) {
    //  this.currentUserInput = event.target.value;
    //},
    setText() {
      this.message = this.$refs.userInput.value;
      //this.message = this.currentUserInput;
    },
  },
  beforeCreate() {
    console.log("beforeCreate()");
  },
  created() {
    console.log("created()");
  },
  beforeMount() {
    console.log("beforeMount()");
  },
  mounted() {
    console.log("mounted()");
  },
  beforeUpdate() {
    console.log("beforeUpdate()");
  },
  updated() {
    console.log("updated");
  },
  beforeUnmount() {
    console.log("beforeUnmount()");
  },
  unmounted() {
    console.log("unmounted()");
  },
});

app.mount('#app');

Vue.createApp({
  template: `
    <div>
      <!-- This would not work because "message" is a 
      property of app (not app2) application and they
      are not connected by any means -->
      <!--p>{{ message }}</p-->
      <p>{{ favouriteMeal }}</p>
    </div>
  `,
  data() {
    return {
      favouriteMeal: "Pizza",
    };
  },
}).mount('#app2');

setTimeout(() => { app.unmount(); }, 3000);

//const data = {
//  message: "Hello!",
//  longMessage: "Hello! World!",
//};
//
//const handler = {
//  set(target, key, value) {
//    console.log(target);
//    console.log(key);
//    console.log(value);
//    if (key == "message")
//      target.longMessage = `${value} World!`
//  }
//};
//
//const proxy = new Proxy(data, handler);
//
//proxy.message = "Hello!!!";
//console.log(proxy.longMessage);


//let message = "Hello!";
//let longMessage = message + "World!";
//console.log(longMessage);
//message = "Hello!!!!!! "
//console.log(longMessage);