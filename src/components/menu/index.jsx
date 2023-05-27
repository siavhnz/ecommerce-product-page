import { useRef, useState } from "react";
import { ReactComponent as Hambur } from "../../assets/images/icon-menu.svg";
import { ReactComponent as Close } from "../../assets/images/icon-close.svg";
import { motion } from "framer-motion";
import useSize from "../../hooks/resize";
import styles from "./index.module.css";
import Navigation from "./Navigation";

const variants = {
    open: (height) => ({
        clipPath: `circle(${height * 2 + 200}px at 2rem 2.5rem)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(0px at 2rem 2.5rem)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};


const Menu = () => {

    const [isOpen, setIsOpen] = useState(false);
    const target = useRef(null);
    const size = useSize(target)

    const items = ["Collections", "Men", "Women", "About", "Contact"];

    const openMenuHandler = () => {
        setIsOpen(true);
    }

    const closeMenuHandler = () => {
        setIsOpen(false);
    }

    return <>
        <button aria-label="open menu" className={styles.hambur} onClick={openMenuHandler}>
            <Hambur aria-hidden={true} focusable={false} />
        </button>
        <motion.nav
            ref={target}
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={size && size.height}
            className={styles.nav}
            variants={variants}
        >
            <button className={styles.close} aria-label="close menu" onClick={closeMenuHandler}>
                <Close aria-hidden={true} focusable={false} />
            </button>

            <Navigation items={items} />

        </motion.nav>
    </>
}

export default Menu;