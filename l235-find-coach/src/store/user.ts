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
    async auth(mode: "login" | "signup", creds: LoginData): Promise<void> {
      let url = "";
      switch (mode) {
        case "login":
          url = `${this.baseAuthUrl}:signInWithPassword?key=${this.webApiKey}`;
          break;
        case "signup":
          url = `${this.baseAuthUrl}:signUp?key=${this.webApiKey}`;
          break;
      }
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: creds.email,
          password: creds.password,
          returnSecureToken: true,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.log(data);
        const error = new Error(
          data.message ?? `Failed to sign ${mode === "login" ? "in" : "up"}`
        );
        throw error;
      }

      const typedData = data as SigninResponse;

      localStorage.setItem("token", typedData.idToken);
      localStorage.setItem("userId", typedData.localId);

      // Set user's properties
      this.token = typedData.idToken;
      this.userId = typedData.localId;
      this.tokenExpiresIn = typedData.expiresIn;
    },
    async signup(creds: LoginData): Promise<void> {
      return await this.auth("signup", creds);
    },
    async login(creds: LoginData): Promise<void> {
      return await this.auth("login", creds);
    },
    autoLogin() {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");
      if (token && userId) {
        this.token = token;
        this.userId = userId;
      }
    },
    logout() {
      this.token = null;
      this.userId = null;
      this.tokenExpiresIn = null;
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
    },
  },
});

export default userStore;
