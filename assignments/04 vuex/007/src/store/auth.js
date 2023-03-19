const authModule = {
    state() {
        return {
            isLoggedIn: false,
        };
    },
    getters: {
        isAuthenticated(state) {
            return state.isLoggedIn;
        }
    },
    mutations: {
        setAuth(state, value) {
            state.isLoggedIn = value;
        }
    },
    actions: {
        login(context) {
            setTimeout(() => {
                context.commit("setAuth", true);
            }, 200)
        },
        logout(context) {
            setTimeout(() => {
                context.commit("setAuth", false);
            }, 200);
        },
    },
};

export default authModule;