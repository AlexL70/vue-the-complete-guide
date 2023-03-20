<template>
    <section>
        <base-card>
            <h2>Register as a coach now!</h2>
            <coach-form @new-coach="registerCoach"></coach-form>
        </base-card>
    </section>
</template>

<script lang="ts">
import CoachForm from "@/components/coaches/CoachForm.vue";
import coachesStore from "@/store/coaches";
import { mapStores } from "pinia";
import type { Coach } from "@/types/dto";
import { defineComponent } from "vue";
export default defineComponent({
    components: {
        CoachForm,
    },
    computed: {
        ...mapStores(coachesStore),
    },
    methods: {
        registerCoach(newCoach: Coach): void {
            this.coachesStore.registerCoach({
                firstName: newCoach.firstName,
                lastName: newCoach.lastName,
                description: newCoach.description,
                hourlyRate: newCoach.hourlyRate,
                areas: newCoach.areas
            } as Coach);
            this.$router.replace("/coaches");
        },
    },
});
</script>