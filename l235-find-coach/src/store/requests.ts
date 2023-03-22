import { defineStore } from "pinia";
import type { MessageToCoach } from "@/types/dto";
import userStore from "./user";

const messagesStore = defineStore("messages", {
  state: () => ({
    requests: [] as MessageToCoach[],
  }),
  getters: {
    getRequests(state): MessageToCoach[] {
      let userId = userStore().userId;
      return state.requests.filter((r) => r.coachId === userId);
    },
    hasRequests(state): boolean {
      let userId = userStore().userId;
      return state.requests && state.requests.some((r) => r.coachId === userId);
    },
  },
  actions: {
    addRequest(message: MessageToCoach): void {
      message.id = crypto.randomUUID();
      this.requests.unshift(message);
    },
  },
});

export default messagesStore;
