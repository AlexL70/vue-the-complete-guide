const mutations = {
    incCounter(state) {
        state.counter++;
    },
    addToCounter(state, payload) {
        state.counter = state.counter + payload.value;
    },
};

export default mutations;