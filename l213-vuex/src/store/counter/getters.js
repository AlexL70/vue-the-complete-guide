const getters = {
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
};

export default getters;