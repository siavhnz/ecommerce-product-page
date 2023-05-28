import { useContext } from "react";
import { SliderContext } from "../slider/store/slider-context";
import { ProductContext } from "../../store/contexts/product";

const SlideItem = () => {
    const sliderCtx = useContext(SliderContext);
    const productCtx = useContext(ProductContext);

    const handleLighBox = () => {
        if (window.innerWidth >= 1440) {

            productCtx.openLightBox();

        }
    }

    return <div onClick={handleLighBox}>
        <img style={{ "pointerEvents": "none" }}
            src={sliderCtx.slides[sliderCtx.slideIndex]}
            alt="" />
    </div>
}

export default SlideItem;