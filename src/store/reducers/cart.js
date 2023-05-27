export const ActionType = {
    ADD_TO_CART: "ADD_TO_CART",
    REMOVE_FROM_CART: "REMOVE_FROM_CART",
    CLOSE_SNACKBAR: "CLOSE_SNACKBAR"
}

export const cartInitialState = {
    cart: [], // {id, title, image, price, count, total}
    count: 0,
    message: {
        show: false,
        text: "",
        severity: "success", //success, error, info, warning
        for: "", //"AddingProduct, RemovingProduct
    }
}

export const cartReducer = (state, action) => {

    if(action.type === ActionType.ADD_TO_CART) {

        const productId = action.payload.id;
        const product = state.cart.filter(x => x.id === productId);

        if(product.length === 0) {
            const count = action.payload.count
            const total = action.payload.price * count
            return {
                cart: [...state.cart, {...action.payload, total }],
                count: state.count + count,
                message: {show: true, text: "Product is added to cart", severity: "success", for: "AddingProduct"}
            }
        } else {
            const products = state.cart.map((item) => {
                if(item.id === productId){
                    const _item = {...item}
                    const count = _item.count + action.payload.count;
                    _item.count = count;
                    _item.total = _item.price * count;
                    return _item;
                }

                return item;
            })

            return {
                cart: [...products],
                count: state.count + action.payload.count,
                message: {show: true, text: "Product is added to cart", severity: "success", for: "AddingProduct"}
            }
        }

    }
    else if(action.type === ActionType.REMOVE_FROM_CART) {
        const productId = action.payload;
        const product = state.cart.filter(x => x.id === productId);


        if(product.length > 0) {
            const count = product[0].count
            return {
                cart: [...state.cart.filter(x => x.id !== productId)],
                count: state.count - count,
                message: {show: true, text: "Product is removed from cart", severity: "success", for: "RemovingProduct"}
            }
        }
    }
    else if(action.type === ActionType.CLOSE_SNACKBAR) {
        return {
            ...state,
            message: {...state.message, text: "", show: false, for: ""}
        }
    }

    return state;
}