
import { motion, AnimatePresence } from "framer-motion";
import styles from "./SlideContainer.module.css";
import { useContext } from "react";
import { SliderContext } from "./store/slider-context";

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

// this code make swap left or right possible
const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
};

const SlideContainer = ({ children }) => {

    const sliderCtx = useContext(SliderContext);

    return <AnimatePresence initial={false} custom={sliderCtx.direction}>
        <motion.div
            className={styles.slide}
            key={sliderCtx.page}
            custom={sliderCtx.direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
            }}
            drag="x"
            whileTap={{ cursor: "grabbing" }}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                    sliderCtx.paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                    sliderCtx.paginate(-1);
                }
            }}>
            {children}
        </motion.div>
    </AnimatePresence>
}

export default SlideContainer;