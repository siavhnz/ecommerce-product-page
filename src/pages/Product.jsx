
import Layout from "../components/layout";
import ProductSlider from "../components/product/slider";
import { products } from "../store/products"
import { ReactComponent as Plus } from "../assets/images/icon-plus.svg";
import { ReactComponent as Minus } from "../assets/images/icon-minus.svg";
import { ReactComponent as Cart } from "../assets/images/icon-cart.svg";
import Button from "../components/ui/button";

const Product = () => {

    const product = products[0]

    return <Layout>
        <div>
            <ProductSlider product={product} />
            <article>
                <p>{product.company}</p>
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <div>
                    <div>
                        <span>{product.priceAfterDiscount}</span>
                        <span>{product.discount}</span>
                    </div>
                    <span>{product.priceBeforDiscount}</span>
                </div>
                <div>
                    <div>
                        <button aria-label="add 1 more to the basket">
                            <Plus aria-hidden={true} focusable={false} />
                        </button>
                        <span>0</span>
                        <button aria-label="remove 1 quantity from the basket">
                            <Minus aria-hidden={true} focusable={false} />
                        </button>
                    </div>
                    <Button>
                        <div>
                            <Cart aria-hidden={true} focusable={false} />
                            <span>Add to cart</span>
                        </div>
                    </Button>
                </div>

            </article>
        </div>

    </Layout>
}

export default Product;