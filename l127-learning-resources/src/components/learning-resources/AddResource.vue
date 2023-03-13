<template>
    <base-card>
        <form>
            <div class="form-control">
                <lable for="title">Title:</lable>
                <input type="text" id="title" name="title" :v-model="newResource.title" />
            </div>
            <div class="form-control">
                <lable for="description">Description:</lable>
                <textarea id="description" name="description" rows="3" :v-model="newResource.description"></textarea>
            </div>
            <div class="form-control">
                <lable for="link">Link:</lable>
                <input type="url" id="link" name="link" :v-model="newResource.link" />
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
            newResource: {} as Resource,
        };
    }
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