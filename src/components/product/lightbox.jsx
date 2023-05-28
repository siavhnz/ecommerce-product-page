import { useContext } from "react";
import SelectiveSlider from "../slider";
import SlideContainer from "../slider/SlideContainer";
import Thumbnails from "../slider/Thumbnails";
import SliderContextProvider from "../slider/store/slider-context";
import styles from "./LightBox.module.css";
import LightBoxItem from "./LightboxItem";
import { ProductContext } from "../../store/contexts/product";
import { ReactComponent as Close } from "../../assets/images/icon-close.svg";
import { AnimatePresence, motion } from "framer-motion";

const LightBox = ({ product }) => {

    const productCtx = useContext(ProductContext);

    const thumbnails = product.images.map((item) => {
        if (!item.thumbnail) {
            return item.image
        }
        return item.thumbnail
    });

    const images = product.images.map((item) => {
        return item.image
    })

    return <AnimatePresence> {
        productCtx.isLightBoxOpen && <>
            <motion.div initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={styles.backdrop}
                onClick={() => productCtx.closeLightBox()} />

            <motion.div className={styles.container}
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                exit={{ opacity: -20 }}>
                <button className={styles.close} aria-label="close light box" onClick={() => productCtx.closeLightBox()}>
                    <Close aria-hidden={true} focusable={false} />
                </button>
                <SliderContextProvider slides={images} index={productCtx.index}>
                    <SelectiveSlider controlsStyles={styles.controls}>
                        <SlideContainer>
                            <LightBoxItem />
                        </SlideContainer>
                        <Thumbnails thumbnails={thumbnails} className={styles["thumnail-container"]} />
                    </SelectiveSlider>
                </SliderContextProvider>
            </motion.div>
        </>
    }
    </AnimatePresence>

}

export default LightBox;