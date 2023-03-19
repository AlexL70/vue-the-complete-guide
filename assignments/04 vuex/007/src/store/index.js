import { createStore } from 'vuex';
import authModule from './auth';
import cartModule from './carts';
import productModule from './products';

const store = createStore({
    modules: {
        auth: authModule,
        products: productModule,
        cards: cartModule,
    },
});

export default store;