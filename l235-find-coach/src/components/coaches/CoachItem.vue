<template>
    <li>
        <h3>{{ fullName }}</h3>
        <h4>{{ coach.hourlyRate }}</h4>
        <div><span v-for="area in coach.areas" :key="area">{{ area }}</span></div>
        <div class="actions">
            <router-link :to="coachContactLink">Contact</router-link>
            <router-link :to="coachDetailsLink">Details</router-link>
        </div>
    </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import type { Coach } from "@/types/dto/index";
export default defineComponent({
    props: {
        coach: {
            type: Object as PropType<Coach>,
            required: true
        }
    },
    computed: {
        fullName(): string {
            return `${this.coach.firstName ?? ""} ${this.coach.lastName}`;
        },
        coachContactLink(): string {
            return `${this.$route.path}/${this.coach.id}/contact`;
        },
        coachDetailsLink(): string {
            return `${this.$route.path}/${this.coach.id}`;
        }
    }
});
</script>

<style scoped>
li {
    margin: 1rem 0;
    border: 1px solid #424242;
    border-radius: 12px;
    padding: 1rem;
}

h3 {
    font-size: 1.5rem;
}

h3,
h4 {
    margin: 0.5rem 0;
}

div {
    margin: 0.5rem 0;
}

.actions {
    display: flex;
    justify-content: flex-end;
}
</style>