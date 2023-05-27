
import { motion } from "framer-motion";
import styles from "./MenuItem.module.css";

const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};


const MenuItem = ({ item }) => {

    return (
        <motion.li
            variants={variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <a href="#" className={styles.link}>
                {item}
            </a>
        </motion.li>
    );
};

export default MenuItem;