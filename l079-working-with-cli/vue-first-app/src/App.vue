<template>
    <section>
        <header>
            <h1>My Friends</h1>
        </header>
        <new-friend @add-contact="addNewFriend"></new-friend>
        <ul>
            <friend-contact v-for="friend in friends" :key="friend.id" :id="friend.id" :name="friend.name"
                :phoneNumber="friend.phone" :emailAddress="friend.email" :isFavourite="friend.isFavourite"
                @toggle-favourite="toggleFavouriteStatus" @delete-friend="deleteFriend"></friend-contact>
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
    },
    methods: {
        toggleFavouriteStatus(friendId: string) {
            const friend = this.friends.find(friend => friend.id === friendId);
            if (friend)
                friend.isFavourite = !friend.isFavourite;
        },
        addNewFriend(nf: Friend) {
            const newFriend = {
                id: new Date().toISOString(),
                name: nf.name,
                phone: nf.phone,
                email: nf.email,
                isFavourite: false,
            } as Friend;
            this.friends.push(newFriend);
            nf.email = "";
            nf.name = "";
            nf.phone = "";
        },
        deleteFriend(friendId: string) {
            const friend = this.friends.find(friend => friend.id === friendId);
            if (friend) {
                let index = this.friends.indexOf(friend);
                if (index)
                    this.friends.splice(index, 1);
            }
        },
    }
});
</script>

<style>
* {
    box-sizing: border-box;
}

html {
    font-family: 'Jost', sans-serif;
}

body {
    margin: 0;
}

header {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 3rem auto;
    border-radius: 10px;
    padding: 1rem;
    background-color: #58004d;
    color: white;
    text-align: center;
    width: 90%;
    max-width: 40rem;
}

#app ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

#app li,
#app form {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 1rem auto;
    border-radius: 10px;
    padding: 1rem;
    text-align: center;
    width: 90%;
    max-width: 40rem;
}

#app h2 {
    font-size: 2rem;
    border-bottom: 4px solid #ccc;
    color: #58004d;
    margin: 0 0 1rem 0;
}

#app button {
    font: inherit;
    cursor: pointer;
    border: 1px solid #ff0077;
    background-color: #ff0077;
    color: white;
    padding: 0.05rem 1rem;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
    background-color: #ec3169;
    border-color: #ec3169;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

#app input {
    font: inherit;
    padding: 0.15rem;
}

#app label {
    font-weight: bold;
    margin-right: 1rem;
    width: 7rem;
    display: inline-block;
}

#app form div {
    margin: 1rem 0;
}
</style>