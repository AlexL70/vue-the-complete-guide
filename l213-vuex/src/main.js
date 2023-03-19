import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const counterModule = {
    namespaced: true,
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
        },
    },
    actions: {
        increment(context) {
            setTimeout(() => {
                context.commit("incCounter");
            }, 300)
        },
        increase(context, payload) {
            setTimeout(() => {
                context.commit("addToCounter", payload);
            }, 300);
        },
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
        },
    },
};

const store = createStore({
    modules: {
        cm: counterModule,
    },
    state() {
        return {
            isLoggedIn: false,
        };
    },
    mutations: {
        setAuth(state, payload) {
            state.isLoggedIn = payload.isAuth;
        }
    },
    actions: {
        login(context) {
            setTimeout(() => {
                context.commit("setAuth", { isAuth: true });
            }, 500);
        },
        logout(context) {
            setTimeout(() => {
                context.commit("setAuth", { isAuth: false });
            }, 500);
        }
    },
    getters: {
        userIsAuthenticated(state) {
            return state.isLoggedIn;
        }
    }
});
const app = createApp(App);
app.use(store);

app.mount('#app');
