import Button from "../ui/button"
import { ReactComponent as Delete } from "../assets/images/icon-delete.svg";

const Cart = () => {

    const items = [
        {
            image: "/images/image-product-1-thumbnail.jpg",
            title: "Fall limited edition sneakers",
            price: 125,
            count: 3,
            total: 375.00,
        }
    ];

    const Header = <header>
        <h3>
            Cart
        </h3>
    </header>

    if (items.length === 0) {
        return <article>
            {Header}
            <p>Your cart is empty.</p>
        </article>
    }

    return <article>

        {Header}
        {
            items.length > 0 && <div>

                <ul>
                    {
                        items.map((item, index) => {
                            return <li key={index}>
                                <img alt={item.title} src={item.image} />
                                <div>
                                    <h2>{item.title}</h2>
                                    <p>
                                        <span>${item.price}x{item.count}</span>
                                        <span>${item.total}</span>
                                    </p>
                                </div>
                                <button aria-label={`delete ${item.title} from basket`}>
                                    <Delete aria-hidden={true} focusable={false} />
                                </button>
                            </li>
                        })
                    }
                </ul>
                <Button>
                    Checkout
                </Button>
            </div>
        }
    </article>
}

export default Cart;