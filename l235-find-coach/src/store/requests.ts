import { defineStore } from "pinia";
import type { MessageToCoach } from "@/types/dto";

const messagesStore = defineStore("messages", {
  state: () => ({
    requests: [] as MessageToCoach[],
  }),
  getters: {
    getRequests(state): MessageToCoach[] {
      return state.requests;
    },
    hasRequests(state): boolean {
      return state.requests && state.requests.length > 0;
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
