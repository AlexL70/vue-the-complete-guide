import { defineStore } from "pinia";
import type { MessageToCoach } from "@/types/dto";
import userStore from "./user";

const messagesStore = defineStore("messages", {
  state: () => ({
    usrStore: userStore(),
    requests: [] as MessageToCoach[],
  }),
  getters: {
    getBaseUrl(state) {
      return state.usrStore.baseSrvUrl;
    },
    getUrl(state) {
      return `${state.usrStore.baseSrvUrl}requests/${state.usrStore.userId}.json`;
    },
    getRequests(state): MessageToCoach[] {
      return state.requests.filter((r) => r.coachId === this.usrStore.userId);
    },
    hasRequests(state): boolean {
      return (
        state.requests &&
        state.requests.some((r) => r.coachId === this.usrStore.userId)
      );
    },
  },
  actions: {
    async addRequest(message: MessageToCoach): Promise<void> {
      const req = {
        coachId: message.coachId,
        email: message.email,
        message: message.message,
      } as MessageToCoach;
      const response = await fetch(
        `${this.getBaseUrl}requests/${message.coachId}.json`,
        {
          method: "POST",
          body: JSON.stringify(req),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        const err = new Error(data.message ?? "Failed to register request!");
        throw err;
      }

      req.id = data.name;
      this.requests.unshift(req);
    },
    async fetchRequests(): Promise<void> {
      const response = await fetch(this.getUrl);
      const data = await response.json();
      if (!response.ok) {
        const err = new Error(data.message ?? "Error fetching messages.");
        throw err;
      }
      const requests = [] as MessageToCoach[];
      for (const key in data) {
        const msg = {
          id: key,
          email: data[key].email,
          message: data[key].message,
          coachId: data[key].coachId,
        } as MessageToCoach;
        requests.push(msg);
      }
      this.requests = requests;
    },
  },
});

export default messagesStore;
