import Header from "./Header";
import Wrapper from "./Wrapper"


const Layout = ({ children }) => {
    return <>
        <Header />
        <main>
            {children}
        </main>
    </>
}

export default Layout;