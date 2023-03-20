import { defineStore } from "pinia";

const userStore = defineStore("user", {
  state: () => ({
    userId: "c3",
  }),
  getters: {
    getUserId(state): string {
      return this.userId;
    },
  },
});

export default userStore;
