<template>
    <div>
        <base-dialog :show="isError" title="An error occured" @close="handleError">
            <p>{{ error }}</p>
        </base-dialog>
        <base-dialog :show="isLoading" title="Please, wait." fixed>
            <p v-if="mode === 'login'">Authenticating...</p>
            <p v-else>Signing up new user...</p>
            <base-spinner></base-spinner>
        </base-dialog>
        <base-card>
            <form @submit.prevent="submitForm">
                <div class="form-control">
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" v-model.trim="loginData.email">
                </div>
                <div class="form-control">
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password" v-model.trim="loginData.password">
                </div>
                <p v-if="!formIsValid" class="error">Invalid data. Email must be a valid email and password must be at least
                    6
                    characters long. Please fix it and try again.</p>
                <base-button>{{ submitButtonCaption }}</base-button>
                <base-button type="button" mode="flat" @click="switchAuthMode">{{ switchModeButtonCaption }}</base-button>
            </form>
        </base-card>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { LoginData } from "@/types/dto"
import userStore from "@/store/user";
import { mapStores } from "pinia";
export default defineComponent({
    data() {
        return {
            loginData: {
                email: "",
                password: "",
            } as LoginData,
            formIsValid: true,
            mode: "login" as ("login" | "signup"),
            isLoading: false as boolean,
            error: null as (string | null),
        };
    },
    computed: {
        ...mapStores(userStore),
        submitButtonCaption() {
            switch (this.mode) {
                case "login":
                    return "Login";
                case "signup":
                    return "Signup";
            }
        },
        switchModeButtonCaption() {
            switch (this.mode) {
                case "login":
                    return "Signup instead";
                case "signup":
                    return "Login intead";
            }
        },
        isError() {
            return this.error != null && this.error.length > 0;
        }
    },
    methods: {
        async submitForm() {
            if (this.loginData.email === "" || !this.loginData.email.includes("@") || this.loginData.password.length < 6) {
                this.formIsValid = false;
                return;
            }
            this.isLoading = true;
            let errMsg = "";
            try {
                switch (this.mode) {
                    case "login":
                        errMsg = "Failed to authenticate user.";
                        //  TODO – add login code
                        break;

                    case "signup":
                        errMsg = "Failed to sign up user.";
                        await this.userStore.signup(this.loginData);
                        break;
                }
            } catch (err: any) {
                this.error = err.message ?? errMsg;
            }
            this.isLoading = false;
        },
        switchAuthMode() {
            if (this.mode === "login")
                this.mode = "signup"
            else
                this.mode = "login";
        },
        handleError() {
            this.error = null;
        }
    }
});
</script>

<style scoped>
.error {
    color: #ee3333;
}

.form {
    margin: 1rem;
    padding: 1rem;
}

.form-control {
    margin: 0.5rem 0;
}

label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    display: block;
}

input,
textarea {
    display: block;
    width: 100%;
    font: inherit;
    border: 1px solid #ccc;
    padding: 0.15rem;
}

input:focus,
textarea:focus {
    border-color: #3d008d;
    background-color: #faf6ff;
    outline: none;
}
</style>