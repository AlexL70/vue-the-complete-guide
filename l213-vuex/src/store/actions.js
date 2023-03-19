const actions = {
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
};

export default actions;