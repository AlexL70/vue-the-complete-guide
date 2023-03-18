import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
    state() {
        return {
            counter: 0,
        };
    },
    mutations: {
        incCounter(state) {
            state.counter++;
        },
        addToCounter(state, payload) {
            state.counter = state.counter + payload.value;
        }
    },
    actions: {
        increment(context) {
            setTimeout(() => {
                context.commit("incCounter");
            }, 2000)
        },
        increase(context, payload) {
            setTimeout(() => {
                context.commit("addToCounter", payload);
            }, 500);
        }
    },
    getters: {
        getCounter(state) {
            return state.counter * 2;
        },
        getNormalizedCounter(_, getters) {
            var cnt = getters.getCounter;
            if (cnt <= 0)
                return 0;
            else if (cnt >= 100)
                return 100;
            else
                return cnt;
        }
    }
});
const app = createApp(App);
app.use(store);

app.mount('#app');
