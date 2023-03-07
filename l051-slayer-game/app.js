function calculateHit(min, max) {
    const hit = Math.floor(Math.random() * (max - min)) + min;
}

Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
        };
    },
    methods: {
        attackMonster() {
            hit = calculateHit(5, 12);
            this.monsterHealth -= hit;
            setInterval(this.attackPlayer(), 500);
        },
        attackPlayer() {
            hit = calculateHit(7, 14);
            this.playerHealth -= hit;
        },

    },
}).mount("#monster");