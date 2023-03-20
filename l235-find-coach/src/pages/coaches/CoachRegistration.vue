<template>
    <section>
        <base-card>
            <h2>Register as a coach now!</h2>
            <coach-form></coach-form>
        </base-card>
    </section>
</template>

<script lang="ts">
import CoachForm from "@/components/coaches/CoachForm.vue";
import { defineComponent } from "vue";
export default defineComponent({
    components: {
        CoachForm,
    }
});
</script>