function calculateHit(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            logMessages: [],
            currentRound: 0,
        };
    },
    methods: {
        addLog(message) {
            this.logMessages.push(message)
        },
        attackMonster() {
            this.currentRound++;
            const hit = calculateHit(5, 12);
            this.monsterHealth -= hit;
            if (this.monsterHealth < 0)
                this.monsterHealth = 0;
            this.addLog(`Player hits ${hit} hitpoints. Monster's health drops to ${this.monsterHealth}`);
            this.attackPlayer();
        },
        specialAttackMonster() {
            this.currentRound++;
            const hit = calculateHit(9, 18);
            this.monsterHealth -= hit;
            if (this.monsterHealth < 0)
                this.monsterHealth = 0;
            this.addLog(`Player hits ${hit} hitpoints. Monster's health drops to ${this.monsterHealth}`);
            this.attackPlayer();
        },
        attackPlayer() {
            const hit = calculateHit(7, 14);
            this.playerHealth -= hit;
            if (this.playerHealth < 0)
                this.playerHealth = 0;
            this.addLog(`Monster hits ${hit} hitpoints. Player's health drops to ${this.playerHealth}`);
        },
    },
    computed: {
        monsterBarStyles() {
            return { width: this.monsterHealth + '%' };
        },
        playerBarStyles() {
            return { width: this.playerHealth + '%' };
        },
        specialAttackDisabled() {
            return this.currentRound % 3 !== 0
        },
    },
}).mount("#game");