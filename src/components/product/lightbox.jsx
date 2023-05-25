import Fade from "../lightbox"

const ProductLightBox = () => {
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

export default ProductLightBox;