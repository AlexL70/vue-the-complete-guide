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
        addLog(who, what, value) {
            message = `
            ${who == "player" ? "<span class='log--player'>Player</span>" : "<span class='log--monster'>Monster</span>"}
            ${what == "hit" ? "hits for" : what == "heal" ? "heals himself for" : what}
            ${what == "hit" ? "<span class='log--damage'>" + value + "</span>" : "<span class='log--heal'>" + value + "</span>"}
            ${value ? "hitpoints" : ""}`
            this.logMessages.unshift(message)
        },
        attackMonster() {
            this.currentRound++;
            const hit = calculateHit(5, 12);
            this.monsterHealth -= hit;
            if (this.monsterHealth < 0)
                this.monsterHealth = 0;
            this.addLog("player", "hit", hit);
            this.attackPlayer();
        },
        specialAttackMonster() {
            this.currentRound++;
            const hit = calculateHit(9, 18);
            this.monsterHealth -= hit;
            if (this.monsterHealth < 0)
                this.monsterHealth = 0;
            this.addLog("player", "hit", hit);
            this.attackPlayer();
        },
        attackPlayer() {
            const hit = calculateHit(7, 14);
            this.playerHealth -= hit;
            if (this.playerHealth < 0)
                this.playerHealth = 0;
            this.addLog("monster", "hit", hit);
        },
        healPlayer() {
            this.currentRound++;
            heal = calculateHit(6, 20);
            if (this.playerHealth + heal > 100)
                this.playerHealth = 100;
            else
                this.playerHealth += heal;
            this.addLog("player", "heal", heal);
            this.attackPlayer();
        },
        restart() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.logMessages = [];
            this.currentRound = 0;
            this.gameOver = false;
            this.winner = null;
            this.addLog("player", "restarts game", "");
        },
        surrender() {
            this.winner = "monster";
            this.gameOver = true;
            this.addLog("player", "decides to surrender", "");
        }
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