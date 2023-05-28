
import styles from "./Wrapper.module.css";

const Wrapper = ({ children, cssClass }) => {

    const divClass = cssClass ? `${styles.container} ${cssClass}` : styles.container

    return <div className={divClass}>
        {children}
    </div>
}

export default Wrapper;