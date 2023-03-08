<template>
    <section>
        <h2>My Friends</h2>
        <ul>
            <li>Manuel Lorenz</li>
        </ul>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
    data() {
        return {
            friends: [
                {
                    id: "manuel",
                    name: "Manuel Lorenz",
                    phone: "1234 666 777",
                    email: "manuel@localhost.com",
                },
                {
                    id: "julie",
                    name: "Julie Jones",
                    phone: "9999 333 555",
                    email: "julie@localhost.com",
                }
            ],
        };
    }
});
</script>