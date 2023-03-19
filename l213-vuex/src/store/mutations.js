const mutations = {
    setAuth(state, payload) {
        state.isLoggedIn = payload.isAuth;
    }
};

export default mutations;