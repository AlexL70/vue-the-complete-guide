import type { Coach } from "../types/dto/index";
import { defineStore } from "pinia";
import userStore from "./user";

const coachesStore = defineStore("coaches", {
  state: () => ({
    usrStore: userStore(),
    coaches: [
      {
        id: "c1",
        firstName: "Maximilian",
        lastName: "Schwarzmüller",
        areas: ["frontend", "backend", "career"],
        description:
          "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
        hourlyRate: 30,
      },
      {
        id: "c2",
        firstName: "Julie",
        lastName: "Jones",
        areas: ["frontend", "career"],
        description:
          "I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.",
        hourlyRate: 30,
      },
    ] as Coach[],
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
        // TODO - add error handling here
      }
      this.coaches.unshift(coach);
    },
    async loadCoaches(): Promise<void> {
      console.log("Reloading coaches...");
      const response = await fetch(this.getUrl, {});
      const data = await response.json();
      if (!response.ok) {
        // TODO - add error handling here
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
    },
  },
});

export default coachesStore;
