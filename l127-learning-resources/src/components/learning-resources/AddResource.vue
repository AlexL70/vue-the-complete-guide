<template>
    <base-dialog v-if="inputIsInvalid" title="Invalid input!" @close-dialog="hideDialog">
        <template #default>
            <p>Unfortunately, at least one input value is empty.</p>
            <p>Please make sure you filled them all and try again.</p>
        </template>
        <template #actions>
            <base-button @click="hideDialog">OK</base-button>
        </template>
    </base-dialog>
    <base-card>
        <form @submit.prevent="submitData">
            <div class="form-control">
                <label for="title">Title:</label>
                <input type="text" id="title" name="title" v-model="newResource.title" />
            </div>
            <div class="form-control">
                <label for="description">Description:</label>
                <textarea id="description" name="description" rows="3" v-model="newResource.description"></textarea>
            </div>
            <div class="form-control">
                <label for="link">Link:</label>
                <input type="url" id="link" name="link" v-model="newResource.link" />
            </div>
            <div>
                <base-button type="submit">Add Resource</base-button>
            </div>
        </form>
    </base-card>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import type { Resource } from "./../../types/DtoInterfaces";
export default defineComponent({
    data() {
        return {
            newResource: {
                id: "",
                title: "",
                description: "",
                link: "",
            } as Resource,
            inputIsInvalid: false,
        };
    },
    emits: {
        "add-resource": function (r: Resource) {
            return true;
        },
    },
    methods: {
        submitData(): void {
            if (this.newResource.title.trim().length === 0
                || this.newResource.description.trim().length === 0
                || this.newResource.link.trim().length === 0) {
                this.inputIsInvalid = true;
                return;
            }
            this.$emit("add-resource", this.newResource);
        },
        hideDialog() {
            this.inputIsInvalid = false;
        },
    },
});
</script>

<style scoped>
label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
}

input,
textarea {
    display: block;
    width: 100%;
    font: inherit;
    padding: 0.15rem;
    border: 1px solid #ccc;
}

input:focus,
textarea:focus {
    outline: none;
    border-color: #3a0061;
    background-color: #f7ebff;
}

.form-control {
    margin: 1rem 0;
}
</style>