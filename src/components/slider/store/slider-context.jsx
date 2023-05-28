import { createContext, useState } from "react";
import { wrap } from "popmotion";


export const SliderContext = createContext({
    slides: [],
    page: 0,
    direction: 1, // 1 -> right | -1 left
    slideIndex: 0,
    paginate: (direction) => { },
    goToPage: (index) => { },
});


const SliderContextProvider = ({ children, slides, index }) => {


    const [[page, direction], setPage] = useState([index ?? 0, 0]);

    const slideIndex = wrap(0, slides.length, page);

    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
    };

    const goToPage = (index) => {
        let newDirection = 1;
        let distance = index - slideIndex;
        if (index < slideIndex) {
            newDirection = -1;
        }
        setPage([page + distance, newDirection]);
    };


    const value = {
        slides,
        page,
        direction,
        slideIndex,
        paginate,
        goToPage,
    }

    return <SliderContext.Provider value={value}>
        {children}
    </SliderContext.Provider>

}

export default SliderContextProvider;