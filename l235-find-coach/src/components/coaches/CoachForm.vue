<template>
    <form @submit.prevent="submitForm">
        <div class="form-control" :class="{ 'invalid': !fieldsValidity.firstName }">
            <label for="firstname">First name</label>
            <input type="text" id="firstname" v-model.trim="newCoach.firstName"
                @blur="() => fieldsValidity.firstName = true" />
            <p class="error" v-if="!fieldsValidity.firstName">First name cannot be empty.</p>
        </div>
        <div class="form-control" :class="{ 'invalid': !fieldsValidity.lastName }">
            <label for="lastname">Last name</label>
            <input type="text" id="lastname" v-model.trim="newCoach.lastName"
                @blur="() => fieldsValidity.lastName = true" />
            <p class="error" v-if="!fieldsValidity.lastName">Last name cannot be empty.</p>
        </div>
        <div class="form-control" :class="{ 'invalid': !fieldsValidity.description }">
            <label for="description">Description</label>
            <textarea rows="5" id="description" v-model.trim="newCoach.description"
                @blur="() => fieldsValidity.description = true"></textarea>
            <p class="error" v-if="!fieldsValidity.description">Description cannot be empty.</p>
        </div>
        <div class="form-control" :class="{ 'invalid': !fieldsValidity.hourlyRate }">
            <label for="rate">Hourly Rate</label>
            <input type="number" id="rate" v-model.number="newCoach.hourlyRate"
                @blur="() => fieldsValidity.hourlyRate = true" />
            <p class="error" v-if="!fieldsValidity.hourlyRate">Hourly rate must be bigger than 0.</p>
        </div>
        <div class="form-control" :class="{ 'invalid': !fieldsValidity.areas }">
            <h3>Areas of Expertise</h3>
            <div>
                <input type="checkbox" id="frontend" value="frontend" v-model="newCoach.areas"
                    @blur="() => fieldsValidity.areas = true" />
                <label for="frontend">Frontend Development</label>
            </div>
            <div>
                <input type="checkbox" id="backend" value="backend" v-model="newCoach.areas"
                    @blur="() => fieldsValidity.areas = true" />
                <label for="backend">Backend Development</label>
            </div>
            <div>
                <input type="checkbox" id="career" value="career" v-model="newCoach.areas"
                    @blur="() => fieldsValidity.areas = true" />
                <label for="career">Career Advisory</label>
            </div>
            <p class="error" v-if="!fieldsValidity.areas">Please choose at least one area of expertise.</p>

        </div>
        <p class="error" v-if="!formIsValid">Please fix all above errors and submit again.</p>
        <base-button>Register</base-button>
    </form>
</template>

<script lang="ts">
import type { Coach } from "@/types/dto/index";
import { defineComponent } from "vue";
export default defineComponent({
    emits: ["new-coach"],
    data() {
        return {
            newCoach: {
                id: "",
                firstName: "",
                lastName: "",
                areas: [],
                description: "",
                hourlyRate: 0,
            } as Coach,
            fieldsValidity: {
                firstName: true,
                lastName: true,
                areas: true,
                description: true,
                hourlyRate: true,
            },
            formIsValid: true,
        };
    },
    methods: {
        validateForm(): void {
            this.formIsValid = true;
            if (this.newCoach.firstName === "") {
                this.fieldsValidity.firstName = false;
                this.formIsValid = false;
            } else
                this.fieldsValidity.firstName = true;

            if (this.newCoach.lastName === "") {
                this.fieldsValidity.lastName = false;
                this.formIsValid = false;
            } else
                this.fieldsValidity.lastName = true;

            if (this.newCoach.areas.length === 0) {
                this.fieldsValidity.areas = false;
                this.formIsValid = false;
            } else
                this.fieldsValidity.areas = true;

            if (this.newCoach.description === "") {
                this.fieldsValidity.description = false;
                this.formIsValid = false;
            } else
                this.fieldsValidity.description = true;

            if (!this.newCoach.hourlyRate || this.newCoach.hourlyRate <= 0) {
                this.fieldsValidity.hourlyRate = false;
                this.formIsValid = false;
            } else
                this.fieldsValidity.hourlyRate = true;
        },
        submitForm(): void {
            this.validateForm();
            if (!this.formIsValid)
                return;
            this.$emit("new-coach", this.newCoach);
        }
    },
})
</script>

<style scoped>
.error {
    color: #cc1111;
}

.form-control {
    margin: 0.5rem 0;
}

label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
}

input[type='checkbox']+label {
    font-weight: normal;
    display: inline;
    margin: 0 0 0 0.5rem;
}

input,
textarea {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
}

input:focus,
textarea:focus {
    background-color: #f0e6fd;
    outline: none;
    border-color: #3d008d;
}

input[type='checkbox'] {
    display: inline;
    width: auto;
    border: none;
}

input[type='checkbox']:focus {
    outline: #3d008d solid 1px;
}

h3 {
    margin: 0.5rem 0;
    font-size: 1rem;
}

.invalid label {
    color: red;
}

.invalid input,
.invalid textarea {
    border: 1px solid red;
}</style>