
import { motion } from "framer-motion";
import ActionButton from "../ui/button/ActionButton"
import { ReactComponent as Delete } from "../../assets/images/icon-delete.svg";
import styles from "./index.module.css";
import { useContext } from "react";
import { CartContext } from "../../store/contexts/cart";

const variants = {
    hidden: {
        opacity: 0,
        y: -40
    },
    visible: {
        opacity: 1,
        y: 0
    },
    exit: {
        opacity: 0,
        y: -20
    }
}

const Cart = () => {

    const cartCtx = useContext(CartContext);

    const deleteItem = (id) => {
        cartCtx.removeFromCart(id);
    }

    const Header = <header>
        <h3>
            Cart
        </h3>
    </header>

    if (cartCtx.count === 0) {
        return <motion.article
            initial="hidden" animate="visible" exit="exit" variants={variants}
            className={styles.container}>
            {Header}
            <p className={styles.empty}>Your cart is empty.</p>
        </motion.article>
    }

    return <motion.article
        initial="hidden" animate="visible" exit="exit" variants={variants}
        className={styles.container}>

        {Header}
        {
            cartCtx.count > 0 && <div>

                <ul className={styles.items}>
                    {
                        cartCtx.cart.map((item) => {
                            return <li key={item.id} className={styles.item}>
                                <img alt={item.title} src={item.image} />
                                <div className={styles.info}>
                                    <h2>{item.title}</h2>
                                    <p className={styles.price}>
                                        <span>${Number.parseFloat(item.price).toFixed(2)}</span>
                                        <span>x</span>
                                        <span>{item.count}</span>
                                        <span className={styles.total}>${Number.parseFloat(item.total).toFixed(2)}</span>
                                    </p>
                                </div>
                                <button aria-label={`delete ${item.title} from basket`} className={styles.delete} onClick={() => deleteItem(item.id)}>
                                    <Delete aria-hidden={true} focusable={false} />
                                </button>
                            </li>
                        })
                    }
                </ul>
                <ActionButton>
                    Checkout
                </ActionButton>
            </div>
        }
    </motion.article>

}

export default Cart;