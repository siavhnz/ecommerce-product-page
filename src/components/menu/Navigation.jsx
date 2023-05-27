import { motion } from "framer-motion";
import MenuItem from "./MenuItem";
import styles from "./Navigation.module.css";

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

const Navigation = ({ items }) => {
    return <motion.ul className={styles.navigation} variants={variants}>
        {items.map((item, index) => (
            <MenuItem item={item} key={index} />
        ))}
    </motion.ul>
}

export default Navigation;