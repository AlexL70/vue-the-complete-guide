import { defineStore } from "pinia";
import type { MessageToCoach } from "@/types/dto";

const messagesStore = defineStore("messages", {
  state: () => ({
    requests: [] as MessageToCoach[],
  }),
  actions: {
    addRequest(message: MessageToCoach): void {
      message.id = crypto.randomUUID();
      this.requests.unshift(message);
    },
  },
});

export default messagesStore;
