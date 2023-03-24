import type { Coach } from "../types/dto/index";
import { defineStore } from "pinia";
import userStore from "./user";

const coachesStore = defineStore("coaches", {
  state: () => ({
    lastFetchTimestamp: null as number | null,
    usrStore: userStore(),
    coaches: [] as Coach[],
  }),
  getters: {
    getUrl(state) {
      return `${state.usrStore.baseSrvUrl}coaches.json`;
    },
    getUserUrl(state) {
      return `${state.usrStore.baseSrvUrl}coaches/${state.usrStore.userId}.json`;
    },
    getCoaches(state): Array<Coach> {
      return state.coaches;
    },
    hasCoaches(state): boolean {
      return state.coaches && state.coaches.length > 0;
    },
    getCoachById: (state) => {
      return (id: string) => state.coaches.find((c) => c.id === id) ?? null;
    },
    isCoach(state) {
      return state.coaches.some((c) => c.id == state.usrStore.getUserId);
    },
    lastFetched(): number | null {
      return this.lastFetchTimestamp;
    },
  },
  actions: {
    async registerCoach(coach: Coach): Promise<void> {
      coach.id = this.usrStore.getUserId;
      const response = await fetch(this.getUserUrl, {
        method: "PUT",
        body: JSON.stringify(coach),
      });
      const data = await response.json();
      if (!response.ok) {
        const error = new Error(data.message ?? "Failed to register coach!");
        throw error;
      }
      this.coaches.unshift(coach);
    },
    async loadCoaches(): Promise<void> {
      console.log("Reloading coaches...");
      const response = await fetch(this.getUrl, {});
      const data = await response.json();
      if (!response.ok) {
        const error = new Error(
          data.message ?? "Failed to fetch list of coaches!"
        );
        throw error;
      }
      const coaches = [] as Coach[];
      for (const key in data) {
        const coach = {
          id: key,
          firstName: data[key].firstName,
          lastName: data[key].lastName,
          areas: data[key].areas,
          hourlyRate: data[key].hourlyRate,
          description: data[key].description,
        } as Coach;
        coaches.push(coach);
      }
      this.coaches = coaches;
      this.lastFetchTimestamp = new Date().getTime();
    },
  },
});

export default coachesStore;
