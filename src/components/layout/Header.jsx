

import { AnimatePresence } from "framer-motion";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { ReactComponent as CartIcon } from "../../assets/images/icon-cart.svg";
import Avatar from "../../assets/images/image-avatar.png";
import Wrapper from "./Wrapper"
import Menu from "../menu";
import styles from "./Header.module.css";
import { useContext, useState } from "react";
import Cart from "../cart";
import { CartContext } from "../../store/contexts/cart";


const Header = () => {

    const [cartIsOpen, setCartIsOpen] = useState(false);
    const cartCtx = useContext(CartContext);

    const toggleCart = () => {
        setCartIsOpen((prevState) => !prevState);
    }

    return <header className={styles.header}>
        <Wrapper>
            <Logo />
            <Menu />
            <div className={styles.cart}>
                <div className={styles["cart-icon"]} onClick={toggleCart}>
                    <CartIcon aria-hidden={true} focusable={false} />

                    {
                        cartCtx.count > 0 && <div className={styles["cart-badge"]}>
                            {cartCtx.count}
                        </div>
                    }

                </div>

                <AnimatePresence>
                    {
                        cartIsOpen && <Cart />
                    }
                </AnimatePresence>
            </div>
            <img alt="avatar" src={Avatar} className={styles.avatar} />
        </Wrapper>

    </header>
}

export default Header;