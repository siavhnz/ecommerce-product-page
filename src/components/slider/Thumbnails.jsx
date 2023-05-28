import { useContext, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import styles from "./Thumbnails.module.css";
import { SliderContext } from "./store/slider-context";

const Thumbnails = ({ thumbnails, className }) => {

    const sliderCtx = useContext(SliderContext);
    // calculate what size we can scroll thumbnails to the left
    const thumbnailsEl = useRef(null);
    const [scrollArea, setScrollArea] = useState();

    useEffect(() => {
        const scrollWidth = thumbnailsEl.current.scrollWidth;
        const clientWidth = thumbnailsEl.current.clientWidth;
        if (scrollWidth > clientWidth) {
            setScrollArea(scrollWidth - clientWidth);
        } else {
            setScrollArea(0)
        }
    }, [])

    const cssClasses = className ? `${styles.thumbnails} ${className}` : styles.thumbnails

    return <div className={cssClasses}>
        <motion.div ref={thumbnailsEl} drag="x" dragConstraints={{ right: 0, left: -scrollArea }} whileTap={{ cursor: "grabbing" }} className={styles["inner-thumbnail"]}>
            {
                thumbnails.map((thumbnail, index) => {
                    return <div onClick={() => sliderCtx.goToPage(index)}
                        key={index}
                        className={sliderCtx.slideIndex === index ? `${styles["img-container"]} ${styles.active}` : styles["img-container"]}>
                        <img src={thumbnail} alt="" className={sliderCtx.slideIndex === index ? styles.active : ""} />
                    </div>
                })
            }
        </motion.div>
    </div>
}

export default Thumbnails;