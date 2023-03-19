const cartModule = {
    state() {
        return {
            cartObj: { items: [], total: 0, qty: 0 },
        };
    },
    getters: {
        cart(state) {
            return state.cartObj;
        },
    },
    mutations: {
        addProductToCart(state, productData) {
            const productInCartIndex = state.cartObj.items.findIndex(
                (ci) => ci.productId === productData.id
            );

            if (productInCartIndex >= 0) {
                state.cartObj.items[productInCartIndex].qty++;
            } else {
                const newItem = {
                    productId: productData.id,
                    title: productData.title,
                    image: productData.image,
                    price: productData.price,
                    qty: 1,
                };
                state.cartObj.items.push(newItem);
            }
            state.cartObj.qty++;
            state.cartObj.total += productData.price;
        },
        removeProductFromCart(state, prodId) {
            const productInCartIndex = state.cartObj.items.findIndex(
                (cartItem) => cartItem.productId === prodId
            );
            const prodData = state.cartObj.items[productInCartIndex];
            state.cartObj.items.splice(productInCartIndex, 1);
            state.cartObj.qty -= prodData.qty;
            state.cartObj.total -= prodData.price * prodData.qty;
        },
    },
    actions: {
        addToCart(context, product) {
            setTimeout(() => {
                context.commit("addProductToCart", product);
            }, 200);
        },
        removeFromCart(context, prodId) {
            setTimeout(() => {
                context.commit("removeProductFromCart", prodId);
            }, 200);
        }
    },

};

export default cartModule;