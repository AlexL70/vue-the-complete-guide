const getters = {
    userIsAuthenticated(state) {
        return state.isLoggedIn;
    }
};

export default getters;