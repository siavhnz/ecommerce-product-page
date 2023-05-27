import styles from "./ActionButton.module.css";

const ActionButton = ({ children, onClick }) => {
    return <button className={styles.button} onClick={onClick}>
        {children}
    </button>
}

export default ActionButton;