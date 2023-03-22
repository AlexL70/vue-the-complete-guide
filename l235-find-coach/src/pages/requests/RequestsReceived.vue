<template>
    <section>
        <base-card>
            <header>
                <h2>Requests Received</h2>
            </header>
            <ul v-if="hasRequests">
                <request-item v-for="r in receivedRequests" :req="r" :key="r.id"></request-item>
            </ul>
            <h3 v-else>You haven't received any requests yet.</h3>
        </base-card>
    </section>
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
    computed: {
        ...mapStores(messagesStore),
        receivedRequests(): MessageToCoach[] {
            return this.messagesStore.getRequests;
        },
        hasRequests(): boolean {
            return this.messagesStore.hasRequests;
        }
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