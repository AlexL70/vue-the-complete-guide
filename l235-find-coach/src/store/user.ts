import { defineStore } from "pinia";

const userStore = defineStore("user", {
  state: () => ({
    userId: "c3",
    baseSrvUrl: import.meta.env["VITE_COACH_BASE_SRV_URL"],
  }),
  getters: {
    getUserId(state): string {
      return this.userId;
    },
  },
});

export default userStore;
