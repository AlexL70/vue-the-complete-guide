<template>
    <li>
        <h3>{{ fullName }}</h3>
        <h4>{{ coach.hourlyRate }}</h4>
        <div><base-badge :title="area" :type="area" v-for="area in coach.areas" :key="area"></base-badge></div>
        <div class="actions">
            <base-button link mode="outline" :to="coachContactLink">Contact</base-button>
            <base-button link :to="coachDetailsLink">Details</base-button>
        </div>
    </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import { mapStores } from "pinia";
import coachesStore from "../../store/coaches";
import type { Coach } from "@/types/dto/index";
export default defineComponent({
    props: {
        coach: {
            type: Object as PropType<Coach>,
            required: true
        }
    },
    computed: {
        ...mapStores(coachesStore),
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