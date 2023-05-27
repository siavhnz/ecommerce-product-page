import { ReactComponent as Previous } from "../../assets/images/icon-previous.svg";
import { ReactComponent as Next } from "../../assets/images/icon-next.svg";
import styles from "./SelectiveSlider.module.css";

import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { useEffect, useRef, useState } from "react";


//slideshow code: https://codesandbox.io/s/framer-motion-image-gallery-pqvx3

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

const SelectiveSlider = ({ thumbnails, images, hasControl }) => {

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

    // handle pagination
    const [[page, direction], setPage] = useState([0, 0]);

    const imageIndex = wrap(0, images.length, page);

    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
    };


    const goToPage = (index) => {
        let newDirection = 1;
        let distance = index - imageIndex;
        if (index < imageIndex) {
            newDirection = -1;
        }
        setPage([page + distance, newDirection]);
    };

    // add keydown listener to the document for slide with arrow key
    useEffect(() => {
        document.addEventListener("keydown", keyDownHandler);
        return () => {
            document.removeEventListener("keydown", keyDownHandler);
        }
    });

    // paginate with arrow keys
    const keyDownHandler = (e) => {

        if (e.keyCode === 37) {
            paginate(-1);
        }
        if (e.keyCode === 39) {
            paginate(1);
        }
    }

    return <div className={styles.slider}>
        <div className={styles["inner-slider"]}>
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    className={styles.slide}
                    key={page}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);

                        if (swipe < -swipeConfidenceThreshold) {
                            paginate(1);
                        } else if (swipe > swipeConfidenceThreshold) {
                            paginate(-1);
                        }
                    }}>
                    <img src={images[imageIndex]} alt="" />
                </motion.div>
            </AnimatePresence>
            <div className={styles.thumbnails}>
                <motion.div ref={thumbnailsEl} drag="x" dragConstraints={{ right: 0, left: -scrollArea }} whileTap={{ cursor: "grabbing" }} className={styles["inner-thumbnail"]}>
                    {
                        thumbnails.map((thumbnail, index) => {
                            return <div onClick={() => goToPage(index)}
                                key={index}
                                className={imageIndex === index ? `${styles["img-container"]} ${styles.active}` : styles["img-container"]}>
                                <img src={thumbnail} alt="" className={imageIndex === index ? styles.active : ""} />
                            </div>
                        })
                    }
                </motion.div>
            </div>
        </div>


        {
            hasControl && <div>
                <button className={styles.next} aria-label="next slide" onClick={() => paginate(1)}>
                    <Next aria-hidden={true} focusable={false} />
                </button>
                <button className={styles.prev} aria-label="previous slide" onClick={() => paginate(-1)}>
                    <Previous aria-hidden={true} focusable={false} />
                </button>
            </div>
        }

    </div>
}

export default SelectiveSlider;