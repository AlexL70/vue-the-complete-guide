<template>
    <li>
        <base-card>
            <header>
                <h3>{{ res.title }}</h3>
                <base-button mode="flat">Delete</base-button>
            </header>
            <p>{{ res.description }}</p>
            <nav>
                <a :href="res.link">View Resource</a>
            </nav>
        </base-card>
    </li>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import type { Resource } from "./../../types/DtoInterfaces"
export default defineComponent({
    props: {
        res: {
            type: Object as PropType<Resource>,
            required: true,
        }
    },
});
</script>

<style scoped>
li {
    margin: auto;
    max-width: 40rem;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

h3 {
    font-size: 1.25rem;
    margin: 0.5rem 0;
}

p {
    margin: 0.5rem 0;
}

a {
    text-decoration: none;
    color: #ce5c00;
}

a:hover,
a:active {
    color: #c89300;
}
</style>