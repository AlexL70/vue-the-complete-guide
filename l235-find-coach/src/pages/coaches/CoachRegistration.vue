<template>
    <div>
        <base-dialog :show="showError" title="Error saving coach!" @close="handleError">
            <p>{{ error }}</p>
        </base-dialog>
        <section>
            <base-card>
                <h2>Register as a coach now!</h2>
                <coach-form @new-coach="registerCoach"></coach-form>
            </base-card>
        </section>
    </div>
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
        showError(): boolean {
            return this.error !== null && this.error.length > 0
        }
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