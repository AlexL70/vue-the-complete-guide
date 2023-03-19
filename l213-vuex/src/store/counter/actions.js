const actions = {
    increment(context) {
        setTimeout(() => {
            context.commit("incCounter");
        }, 300)
    },
    increase(context, payload) {
        setTimeout(() => {
            context.commit("addToCounter", payload);
        }, 300);
    }
};

export default actions;