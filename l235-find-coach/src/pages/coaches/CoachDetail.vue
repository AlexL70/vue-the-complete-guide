<template>
    <section>
        <base-card>
            <h2>{{ fullName }}</h2>
            <h3>${{ coach?.hourlyRate }}/hour</h3>
        </base-card>
    </section>
    <section>
        <base-card>
            <h2>Interested? Reach out now!</h2>
            <base-button link :to="contactLink">Contact</base-button>
        </base-card>
        <router-view></router-view>
    </section>
    <section>
        <base-card>
            <base-badge v-for="area in coach?.areas" :key="area" :type="area" :title="area"></base-badge>
            <p>{{ coach?.description }}</p>
        </base-card>
    </section>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import type { Coach } from "@/types/dto";
import coachesStore from "@/store/coaches";
import { mapStores } from "pinia";
export default defineComponent({
    props: {
        id: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            coach: null as null | Coach,
        };
    },
    computed: {
        ...mapStores(coachesStore),
        fullName(): string {
            return `${this?.coach?.firstName ?? ""} ${this?.coach?.lastName ?? ""}`
        },
        contactLink(): string {
            return `${this.$refs.path}/contact`;
        }
    },
    created() {
        this.coach = this.coachesStore.getCoachById(this.id);
    }
});
</script>