

const Menu = () => {

    const items = ["Collections", "Men", "WomenAbout", "Contact"];

    return <nav>
        <ul>
            {items.map((item, index) => {
                return <li key={index}>
                    {item}
                </li>
            })}
        </ul>
    </nav>
}

export default Menu;