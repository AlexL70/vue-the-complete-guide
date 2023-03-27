import { defineStore } from "pinia";
import type { LoginData, SignupResponse, SigninResponse } from "@/types/dto";

const userStore = defineStore("user", {
  state: () => ({
    userId: null as string | null,
    token: null as string | null,
    tokenExpiresIn: null as string | null,
    baseSrvUrl: import.meta.env["VITE_COACH_BASE_SRV_URL"],
    baseAuthUrl: import.meta.env["VITE_AUTH_BASE_SRV_URL"],
    webApiKey: import.meta.env["VITE_WEB_API_KEY"],
  }),
  getters: {
    getUserId(state): string | null {
      return state.userId;
    },
    getToken(state): string {
      return state.token ?? "";
    },
    isAuthenticated(state): boolean {
      return state.token != null && state.token.length > 0;
    },
  },
  actions: {
    async login(creds: LoginData): Promise<void> {
      console.log("Sending login request...");
      const response = await fetch(
        `${this.baseAuthUrl}:signInWithPassword?key=${this.webApiKey}`,
        {
          method: "POST",
          body: JSON.stringify({
            email: creds.email,
            password: creds.password,
            returnSecureToken: true,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        console.log(data);
        const error = new Error(data.message ?? "Failed to sign in");
        throw error;
      }

      const typedData = data as SigninResponse;

      // Set user's properties
      this.token = typedData.idToken;
      this.userId = typedData.localId;
      this.tokenExpiresIn = typedData.expiresIn;
    },
    async signup(creds: LoginData): Promise<void> {
      const response = await fetch(
        `${this.baseAuthUrl}:signUp?key=${this.webApiKey}`,
        {
          method: "POST",
          body: JSON.stringify({
            email: creds.email,
            password: creds.password,
            returnSecureToken: true,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        console.log(data);
        const error = new Error(data.message ?? "Failed to sign up");
        throw error;
      }

      const typedData = data as SignupResponse;

      // Set user's properties
      this.token = typedData.idToken;
      this.userId = typedData.localId;
      this.tokenExpiresIn = typedData.expiresIn;
    },
  },
});

export default userStore;
