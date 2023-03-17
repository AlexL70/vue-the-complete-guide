<template>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>

  <!-- <div class="container">
    <div class="block" :class="{ animate: animatedBlock }"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <div class="container">
    <transition :css="false" @before-enter="beforeEnter" @before-leave="beforeLeave" @enter="enter" @leave="leave"
      @after-enter="afterEnter" @after-leave="afterLeave" @enter-cancelled="enterCancelled"
      @leave-cancelled="leaveCancelled">
      <p v-if="paraIsVisible">This is only sometimes visible...</p>
    </transition>
    <button @click="toggleParaghaph">Toggle the paragraph</button>
  </div>
  <div class="container">
    <list-data></list-data>
  </div>
  <div class="container">
    <transition name="fade-button" mode="out-in">
      <button @click="hideUsers" v-if="usersAreVisible">Hide Users</button>
      <button @click="showUsers" v-else>Show Users</button>
    </transition>
  </div>
  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div> -->
</template>  

<script>
//import ListData from "./components/ListData.vue";
export default {
  //components: { ListData, },
  data() {
    return {
      animatedBlock: false,
      dialogIsVisible: false,
      paraIsVisible: false,
      usersAreVisible: false,
      leaveInterval: null,
      enterInterval: null,
    };
  },
  methods: {
    beforeEnter(el) {
      console.log("Before entering transition.", el);
      el.style.opacity = 0;
    },
    beforeLeave(el) {
      console.log("Before leaving transition.", el);
      el.style.opacity = 1;
    },
    enter(el, done) {
      console.log("Enter transition.", el);
      let round = 1;
      this.enterInterval = setInterval(() => {
        round++;
        el.style.opacity = round * 0.01;
        if (round >= 100) {
          clearInterval(this.enterInterval);
          done();
        }
      }, 5);
    },
    leave(el, done) {
      console.log("Leave transition.", el);
      let round = 100;
      this.leaveInterval = setInterval(() => {
        round--;
        el.style.opacity = round * 0.01;
        if (round <= 1) {
          clearInterval(this.leaveInterval);
          done();
        }
      }, 5);
    },
    afterEnter(el) {
      console.log("After entering transition", el);
      el.style.opacity = 1;
    },
    afterLeave(el) {
      console.log("After leaving transition.", el);
      el.style.opacity = 0;
    },
    enterCancelled(el) {
      console.log("Enter cancelled", el);
      clearInterval(this.enterInterval);
    },
    leaveCancelled(el) {
      console.log("Leave cancelled", el);
      clearInterval(this.leaveInterval);
    },
    animateBlock() {
      this.animatedBlock = true;
    },
    toggleParaghaph() {
      this.paraIsVisible = !this.paraIsVisible;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    showUsers() {
      this.usersAreVisible = true;
    },
    hideUsers() {
      this.usersAreVisible = false;
    }
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}

.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 0.8s ease-in-out; */
}

.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.animate {
  /* transform: translateX(-150px); */
  animation: slide-scale 1s ease-in-out forwards;
}

.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}

.fade-button-enter-active {
  transition: opacity 0.3s ease-out;
}

.fade-button-leave-active {
  transition: opacity 0.3s ease-in;
}

.fade-button-enter-to,
.fade-button-leave-from {
  opacity: 1;
}

.route-enter-from {}

.route-enter-active {
  animation: fade-out 0.2s ease-out reverse;
}


.route-enter-to {}

.route-leave-from {}

.route-leave-active {
  animation: fade-out 0.2s ease-in;
}

.route-leave-to {}

@keyframes slide-scale {
  0% {
    transform: translateX(0) scale(1);
  }

  70% {
    transform: translateX(-120px) scale(1.2);
  }

  100% {
    transform: translateX(-150px) scale(1);
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translate(-20px, -20px) scale(0.6);
  }

  60% {
    opacity: 0.7;
    transform: translate(-10px, -10px) scale(0.8);
  }

  100% {
    opacity: 1;
    transform: translate(0px, 0px) scale(1);
  }
}

@keyframes fade-out {
  0% {
    opacity: 1;
    transform: translate(0px, 0px) scale(1);
  }

  60% {
    opacity: 0.7;
    transform: translate(10px, 10px) scale(0.8);
  }

  100% {
    opacity: 0;
    transform: translate(20px, 20px) scale(0.6);
  }
}
</style>