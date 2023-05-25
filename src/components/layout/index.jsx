import Header from "./Header";
import Wrapper from "./Wrapper"


const Layout = ({ children }) => {
    return <>
        <Wrapper>
            <Header />
            <main>
                {children}
            </main>
        </Wrapper>
    </>
}

export default Layout;