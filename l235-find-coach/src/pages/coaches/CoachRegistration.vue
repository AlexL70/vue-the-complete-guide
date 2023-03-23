<template>
    <base-dialog :show="error && error.length > 0" title="Error saving coach!" @close="handleError">
        <p>{{ error }}</p>
    </base-dialog>
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
    data() {
        return {
            error: null as (string | null)
        };
    },
    computed: {
        ...mapStores(coachesStore),
    },
    methods: {
        async registerCoach(newCoach: Coach): Promise<void> {
            try {
                await this.coachesStore.registerCoach({
                    firstName: newCoach.firstName,
                    lastName: newCoach.lastName,
                    description: newCoach.description,
                    hourlyRate: newCoach.hourlyRate,
                    areas: newCoach.areas
                } as Coach);
                this.$router.replace("/coaches");
            } catch (error: any) {
                this.error = error.message ?? "Something went wrong. Try again later.";
            }
        },
        handleError() {
            this.error = null;
        }
    },
});
</script>