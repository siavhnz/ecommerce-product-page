import { useContext } from "react";
import { SliderContext } from "../slider/store/slider-context";

const LightBoxItem = () => {
    const sliderCtx = useContext(SliderContext);

    return <img style={{ "pointerEvents": "none" }} src={sliderCtx.slides[sliderCtx.slideIndex]} alt="" />
}

export default LightBoxItem;