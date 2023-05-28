import { createContext, useState } from "react";


export const ProductContext = createContext({
    index: 0,
    isLightBoxOpen: false,
    openLightBox: (index) => { },
    closeLightBox: () => { },
});

const ProductContextProvider = ({ children }) => {

    const [state, setState] = useState({
        index: 0,
        isLightBoxOpen: false
    });

    const openLightBox = (index) => {
        setState({ index, isLightBoxOpen: true })
    }

    const closeLightBox = () => {
        setState({ ...state, isLightBoxOpen: false })
    }

    const value = { ...state, openLightBox, closeLightBox }

    return <ProductContext.Provider value={value}>
        {children}
    </ProductContext.Provider>

}

export default ProductContextProvider;