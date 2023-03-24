<template>
    <div>
        <base-dialog :show="showError" title="Error loading requests!" @close="handleError">
            <p>{{ error }}</p>
        </base-dialog>
        <section>
            <base-card>
                <header>
                    <h2>Requests Received</h2>
                </header>
                <div v-if="isLoading">
                    <base-spinner></base-spinner>
                </div>
                <ul v-else-if="hasRequests">
                    <request-item v-for="r in receivedRequests" :req="r" :key="r.id"></request-item>
                </ul>
                <h3 v-else>You haven't received any requests yet.</h3>
            </base-card>
        </section>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapStores } from "pinia";
import messagesStore from "@/store/requests";
import RequestItem from "@/components/requests/RequestItem.vue";
import type { MessageToCoach } from "@/types/dto/index";
export default defineComponent({
    components: {
        RequestItem,
    },
    data() {
        return {
            error: null as (string | null),
            isLoading: false,
        };
    },
    computed: {
        ...mapStores(messagesStore),
        receivedRequests(): MessageToCoach[] {
            return this.messagesStore.getRequests;
        },
        hasRequests(): boolean {
            return this.messagesStore.hasRequests;
        },
        showError(): boolean {
            return this.error !== null && this.error.length > 0;
        }
    },
    methods: {
        async loadRequests(): Promise<void> {
            this.isLoading = true;
            try {
                await this.messagesStore.fetchRequests();
            } catch (err: any) {
                this.error = err.message || "Something went wrong!";
            }
            this.isLoading = false;
        },
        handleError() {
            this.error = null;
        },
    },
    created() {
        this.loadRequests();
    },
});
</script>

<style scoped>
header {
    text-align: center;
}

ul {
    list-style: none;
    margin: 2rem auto;
    padding: 0;
    max-width: 30rem;
}

h3 {
    text-align: center;
}
</style>