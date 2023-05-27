import SelectiveSlider from "../slider/SelectiveSlider";
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
            <SelectiveSlider thumbnails={thumbnails} images={images} hasControl={true} />
        </div>
}

export default ProductSlider;