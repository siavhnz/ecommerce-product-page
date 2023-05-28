import SelectiveSlider from "../slider";
import SlideContainer from "../slider/SlideContainer";
import Thumbnails from "../slider/Thumbnails";
import SliderContextProvider from "../slider/store/slider-context";
import SlideItem from "./SlideItem";
import styles from "./Slider.module.css";


const ProductSlider = ({ product }) => {

    const thumbnails = product.images.map((item) => {
        if (!item.thumbnail) {
            return item.image
        }
        return item.thumbnail
    });

    const images = product.images.map((item) => {
        return item.image
    })

    return <div className={styles["slider-container"]}>
        <SliderContextProvider slides={images}>
            <SelectiveSlider controlsStyles={styles.controls}>
                <SlideContainer>
                    <SlideItem />
                </SlideContainer>
                <Thumbnails thumbnails={thumbnails} />
            </SelectiveSlider>
        </SliderContextProvider>
    </div>
}

export default ProductSlider;