
import { motion } from "framer-motion";
import styles from "./MenuItem.module.css";

const variants = {
    open: () => {
        if (window.innerWidth <= 1024) {
            return {
                y: 0,
                opacity: 1,
                transition: {
                    y: { stiffness: 1000, velocity: -100 }
                }
            }
        } else {
            return {
                x: 0,
                opacity: 1,
                transition: {
                    y: { stiffness: 1000, velocity: -100 }
                }
            }
        }


    },
    closed: () => {
        if (window.innerWidth <= 1024) {
            return {
                y: 50,
                opacity: 0,
                transition: {
                    y: { stiffness: 1000 }
                }
            }
        } else {
            return {
                x: 50,
                opacity: 0,
                transition: {
                    y: { stiffness: 1000 }
                }
            }
        }

    }
};


const MenuItem = ({ item }) => {

    return (
        <motion.li
            variants={variants}
            whileHover={() => {
                if (window.innerWidth <= 1024) {
                    return { scale: 1.1 }
                }
                return {}
            }}

            whileTap={() => {
                if (window.innerWidth <= 1024) {
                    return { scale: 0.95 }
                }
                return {}
            }}
        >
            <a href="#" className={styles.link}>
                {item}
            </a>
        </motion.li>
    );
};

export default MenuItem;