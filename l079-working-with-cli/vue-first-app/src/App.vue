<template>
    <section>
        <header>
            <h1>My Friends</h1>
        </header>
        <ul>
            <friend-contact v-for="friend in friends" :key="friend.id" :id="friend.id" :name="friend.name"
                :phoneNumber="friend.phone" :emailAddress="friend.email" :isFavourite="friend.isFavourite"></friend-contact>
        </ul>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import type { Friend } from "./interfaces/Friend";
export default defineComponent({
    data() {
        return {
            friends: [
                {
                    id: "manuel",
                    name: "Manuel Lorenz",
                    phone: "1234 666 777",
                    email: "manuel@localhost.com",
                    isFavourite: true,
                } as Friend,
                {
                    id: "julie",
                    name: "Julie Jones",
                    phone: "9999 333 555",
                    email: "julie@localhost.com",
                } as Friend,
            ],
        };
    }
});
</script>