import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { ReactComponent as Cart } from "../../assets/images/icon-cart.svg";
import Avatar from "../../assets/images/image-avatar.png";
import Menu from "../menu";


const Header = () => {
    return <header>
        <Logo />
        <Menu />
        <button aria-label="shop cart">
            <Cart aria-hidden={true} focusable={false} />
        </button>
        <img alt="avatar" src={Avatar} />
    </header>
}

export default Header;