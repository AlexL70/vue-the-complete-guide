<template>
  <div v-if="open" class="backdrop" @click="$emit('close')"></div>
  <transition name="modal">
    <dialog open v-if="open">
      <slot></slot>
    </dialog>
  </transition>
</template>

<script>
export default {
  props: ["open"],
  emits: ['close'],
};
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.75);
}

dialog {
  position: fixed;
  top: 30vh;
  width: 30rem;
  left: calc(50% - 15rem);
  margin: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  padding: 1rem;
  background-color: white;
  z-index: 100;
  border: none;
  /* animation: modal 0.5s ease-out forwards; */
}

@keyframes modal {
  from {
    opacity: 0;
    transform: translateX(-20px) translateY(-60px) scale(0.7);
  }

  to {
    opacity: 100;
    transform: translateX(0) translateY(0) scale(1);
  }
}

.modal-enter-active {
  animation: modal-in 0.3s ease-in;
}

.modal-leave-active {
  animation: modal-out 0.3s ease-out;
}

@keyframes modal-in {
  from {
    opacity: 0;
    transform: translateX(-20px) translateY(-60px) scale(0.7);
  }

  to {
    opacity: 100;
    transform: translateX(0) translateY(0) scale(1);
  }
}

@keyframes modal-out {
  from {
    opacity: 100;
    transform: translateX(0) translateY(0) scale(1);
  }

  to {
    opacity: 0;
    transform: translateX(20px) translateY(60px) scale(0.7);
  }

}
</style>