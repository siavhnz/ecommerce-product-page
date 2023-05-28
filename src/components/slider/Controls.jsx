
import { useContext } from "react";
import { SliderContext } from "./store/slider-context";
import { ReactComponent as Previous } from "../../assets/images/icon-previous.svg";
import { ReactComponent as Next } from "../../assets/images/icon-next.svg";
import styles from "./Controls.module.css";


const Controls = ({ className }) => {
    const sliderCtx = useContext(SliderContext);


    const cssClasses = className ? `${styles.controls} ${className}` : styles.controls

    return <div className={cssClasses}>
        <button aria-label="next slide" onClick={() => sliderCtx.paginate(1)}>
            <Next aria-hidden={true} focusable={false} />
        </button>
        <button aria-label="previous slide" onClick={() => sliderCtx.paginate(-1)}>
            <Previous aria-hidden={true} focusable={false} />
        </button>
    </div>
}

export default Controls;