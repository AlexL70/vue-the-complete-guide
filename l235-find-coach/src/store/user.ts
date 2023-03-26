import { defineStore } from "pinia";
import type { LoginData, SignupResponse } from "@/types/dto";

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
      return this.userId;
    },
  },
  actions: {
    login() {},
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

      const typedData = {
        idToken: data.idToken,
        email: data.email,
        expiresIn: data.expiresIn,
        refreshToken: data.refreshToken,
        localId: data.localId,
      } as SignupResponse;

      // Set user's properties
      this.token = typedData.idToken;
      this.userId = typedData.localId;
      this.tokenExpiresIn = typedData.expiresIn;
    },
  },
});

export default userStore;
