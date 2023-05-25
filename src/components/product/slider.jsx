import SelectiveSlider from "../slider/SelectiveSlider";


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

    return <SelectiveSlider thumbnails={thumbnails} images={images} hasControl={false} />
}

export default ProductSlider;