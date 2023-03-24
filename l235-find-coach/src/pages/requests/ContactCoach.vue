<template>
    <div>
        <base-dialog :show="showError" title="Error sending message to coach!" @close="handleError">
            <p>{{ error }}</p>
        </base-dialog>
        <form @submit.prevent="submitForm">
            <div class="form-control">
                <label for="email">Your email</label>
                <input type="email" id="email" v-model.trim="messageToCoach.email" />
            </div>
            <div class="form-control">
                <label for="message">Message</label>
                <textarea id="message" rows="5" v-model.trim="messageToCoach.message"></textarea>
            </div>
            <p class="errors" v-if="!formIsValid">Form is not filled in properly. Fill in both email and message and try
                again.
            </p>
            <div class="actions">
                <base-button :enabled="formIsValid">Send message</base-button>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { MessageToCoach } from "@/types/dto";
import messageStore from "@/store/requests";
import { mapStores } from "pinia";

export default defineComponent({
    data() {
        return {
            error: null as (string | null),
            messageToCoach: {
                email: "",
                message: "",
            } as MessageToCoach,
            formIsValid: true,
        };
    },
    computed: {
        ...mapStores(messageStore),
        showError(): boolean {
            return this.error !== null && this.error.length > 0;
        },
    },
    methods: {
        async submitForm(): Promise<void> {
            this.formIsValid = true;
            if (this.messageToCoach.email === "" || !this.messageToCoach.email.includes("@")
                || this.messageToCoach.message === "") {
                this.formIsValid = false;
                return;
            }

            this.messageToCoach.coachId = this.$route.params.id as string;
            try {
                await this.messagesStore.addRequest(this.messageToCoach);
                this.$router.replace("/coaches");
            } catch (error: any) {
                this.error = error.message ?? "Something went wrong.";
            }
        },
        handleError(): void {
            this.error = null;
        }
    }
});
</script>

<style scoped>
form {
    margin: 1rem;
    border: 1px solid #ccc;
    border-radius: 12px;
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

.errors {
    font-weight: bold;
    color: red;
}

.actions {
    text-align: center;
}
</style>