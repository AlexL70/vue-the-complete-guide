<template>
    <li>
        <div>
            <header>
                <h3>{{ res.title }}</h3>
                <button>Delete</button>
            </header>
            <p>{{ res.description }}</p>
            <nav>
                <a :href="res.link">View Resource</a>
            </nav>
        </div>
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
    }
});
</script>