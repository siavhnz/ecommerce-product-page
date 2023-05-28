
import { useContext, useEffect, useRef } from "react";
import styles from "./index.module.css";
import Controls from "./Controls";
import { SliderContext } from "./store/slider-context";


//slideshow code: https://codesandbox.io/s/framer-motion-image-gallery-pqvx3

const variants = {
    enter: (direction) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        };
    },
    center: {
        x: 0,
        opacity: 1
    },
    exit: (direction) => {
        return {
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        };
    }
};

const SelectiveSlider = ({ children, controlsStyles }) => {

    const sliderCtx = useContext(SliderContext);

    const slider = useRef(null);

    // add keydown listener to the document for slide with arrow key
    useEffect(() => {

        slider.current.addEventListener("keydown", keyDownHandler);
        return () => {
            // when remove slider from dom this if can protect to cause error
            if (slider && slider.current) {
                slider.current.removeEventListener("keydown", keyDownHandler);
            }
        }
    });

    // paginate with arrow keys
    const keyDownHandler = (e) => {

        if (e.keyCode === 37) {
            sliderCtx.paginate(-1);
        }
        if (e.keyCode === 39) {
            sliderCtx.paginate(1);
        }
    }

    return <div className={styles.slider} ref={slider}>
        <div className={styles["inner-slider"]}>
            {children}
        </div>
        <Controls className={controlsStyles} />
    </div>

}

export default SelectiveSlider;