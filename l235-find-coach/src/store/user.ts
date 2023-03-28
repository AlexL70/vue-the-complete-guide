import { defineStore } from "pinia";
import type { LoginData, SignupResponse, SigninResponse } from "@/types/dto";

const userStore = defineStore("user", {
  state: () => ({
    timer: undefined as number | undefined,
    userId: null as string | null,
    token: null as string | null,
    autoLoggedOut: false,
    expirationTimestamp: null as number | null,
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
    getIsAutoLoggetOut(state): boolean {
      return state.autoLoggedOut;
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

      const expiresIn = +typedData.expiresIn * 1000;
      //const expiresIn = 10000; // uncomment this and comment out line above to test autologout
      const expirationTimestamp = new Date().getTime() + expiresIn;

      this.timer = setTimeout(() => {
        this.autologout();
      }, expiresIn);

      localStorage.setItem("token", typedData.idToken);
      localStorage.setItem("userId", typedData.localId);
      localStorage.setItem(
        "expirationTimestamp",
        expirationTimestamp.toFixed()
      );

      // Set user's properties
      this.token = typedData.idToken;
      this.userId = typedData.localId;
      this.expirationTimestamp = expirationTimestamp;
      this.autoLoggedOut = false;
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
      const expiration = localStorage.getItem("expirationTimestamp");
      const currTimestamp = new Date().getTime();
      if (token && userId && expiration && +expiration > currTimestamp) {
        this.token = token;
        this.userId = userId;
        this.expirationTimestamp = +expiration;
        this.autoLoggedOut = false;
        this.timer = setTimeout(() => {
          this.autologout();
        }, this.expirationTimestamp - currTimestamp);
      } else this.logout();
    },
    logout() {
      clearTimeout(this.timer);
      this.token = null;
      this.userId = null;
      this.expirationTimestamp = null;
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      localStorage.removeItem("expirationTimestamp");
    },
    autologout() {
      this.logout();
      this.autoLoggedOut = true;
    },
  },
});

export default userStore;
