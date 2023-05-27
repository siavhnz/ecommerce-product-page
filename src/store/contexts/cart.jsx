import { createContext, useReducer } from "react";
import { ActionType, cartInitialState, cartReducer } from "../reducers/cart";
import { Alert, Snackbar } from "@mui/material";


export const CartContext = createContext({
    ...cartInitialState,
    addToCart: ({ id, image, title, price, count }) => { },
    removeFromCart: (id) => { },
});


const CartContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(cartReducer, cartInitialState);

    const addToCart = (product) => {
        dispatch({
            type: ActionType.ADD_TO_CART,
            payload: product
        })
    }

    const removeFromCart = (id) => {
        dispatch({
            type: ActionType.REMOVE_FROM_CART,
            payload: id
        })
    }

    const handleCloseSnackbar = () => {
        dispatch({
            type: ActionType.CLOSE_SNACKBAR,
        })
    }

    const value = {
        ...state,
        addToCart,
        removeFromCart
    }

    return <>
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
        <Snackbar open={state.message.show} autoHideDuration={3000} onClose={handleCloseSnackbar}>
            <Alert onClose={handleCloseSnackbar} severity={state.message.severity} sx={{ width: '100%' }}>
                {state.message.text}
            </Alert>
        </Snackbar>
    </>
}

export default CartContextProvider;