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
            gameOver: false,
            winner: null,
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
        healPlayer() {
            this.currentRound++;
            heal = calculateHit(6, 20);
            if (this.playerHealth + heal > 100)
                this.playerHealth = 100;
            else
                this.playerHealth += heal;
            this.addLog(`Player heals himself for ${heal} hitpoints. Player's health increases to ${this.playerHealth}`);
            this.attackPlayer();
        },
    },
    watch: {
        playerHealth(value) {
            if (value <= 0) {
                this.gameOver = true;
                if (this.monsterHealth <= 0) {
                    this.winner = "draw"
                } else {
                    this.winner = "monster"
                }
            }
        },
        monsterHealth(value) {
            if (value <= 0) {
                this.gameOver = true;
                if (this.playerHealth <= 0) {
                    this.winner = "draw"
                } else {
                    this.winner = "player"
                }
            }
        },
    },
    computed: {
        gameResult() {
            let result = "";
            switch (this.winner) {
                case "draw":
                    result = "It's a draw!"
                    break;
                case "player":
                    result = "Congratulations! You won!"
                    break;
                case "monster":
                    result = "It's a pity! You lost!"
                    break;
            }
            return result;
        },
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