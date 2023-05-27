
import Layout from "../components/layout";
import ProductSlider from "../components/product/Slider";
import { products } from "../store/products"
import { ReactComponent as Cart } from "../assets/images/icon-cart.svg";
import ActionButton from "../components/ui/button/ActionButton";
import NumberInput from "../components/ui/input/NumberInput";
import styles from "./Product.module.css";
import { useContext, useRef, useState } from "react";
import { CartContext } from "../store/contexts/cart";

const Product = () => {

    const cartCtx = useContext(CartContext);

    const productCount = useRef(null);
    const product = products[0];


    const handleAddToCart = () => {

        const count = +productCount.current.value;
        if (count === 0) return;
        const id = product.id;
        const image = product.images[0].thumbnail;
        const price = product.priceAfterDiscount;
        const title = product.title;

        cartCtx.addToCart({ id, image, price, title, count });
    }

    return <Layout>
        <div>
            <ProductSlider product={product} />
            <article className={styles.article}>
                <p className={styles.company}>{product.company}</p>
                <h1 className={styles.title}>{product.title}</h1>
                <p className={styles.desc}>{product.description}</p>
                <div className={styles.price}>
                    <div className={styles["active-price"]}>
                        <span>${Number.parseFloat(product.priceAfterDiscount).toFixed(2)}</span>
                        <span>{product.discount}</span>
                    </div>
                    <span className={styles["inactive-price"]}>${Number.parseFloat(product.priceBeforDiscount).toFixed(2)}</span>
                </div>
                <div className={styles.actions}>
                    <NumberInput min={0} ref={productCount} reset={cartCtx.message.for === "AddingProduct"} />
                    <div className={styles["add-to-cart"]}>
                        <ActionButton onClick={handleAddToCart}>
                            <div className={styles["inner-add-to-cart"]}>
                                <Cart aria-hidden={true} focusable={false} />
                                <span>Add to cart</span>
                            </div>
                        </ActionButton>
                    </div>
                </div>
            </article>
        </div>
    </Layout>
}

export default Product;