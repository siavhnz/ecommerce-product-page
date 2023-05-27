
import { forwardRef, useEffect, useState } from "react";
import { ReactComponent as Plus } from "../../../assets/images/icon-plus.svg";
import { ReactComponent as Minus } from "../../../assets/images/icon-minus.svg";
import styles from "./NumberInput.module.css";


const NumberInput = forwardRef(({ min, max, reset }, ref) => {

    if (typeof min !== "number" && typeof min !== "undefined") {

        throw new TypeError("InputNumber: min must be a number");
    }

    if (typeof max !== "number" && typeof max !== "undefined") {

        throw new TypeError("InputNumber: max must be a number");
    }


    const [number, setNumber] = useState(0)

    const increase = () => {

        setNumber((prevState) => {
            if (max !== undefined && prevState + 1 > max) {
                return max
            }
            return prevState + 1
        })

    }

    const decrease = () => {

        setNumber((prevState) => {
            if (min !== undefined && prevState - 1 < min) {
                return min
            }
            return prevState - 1
        })

    }

    useEffect(() => {
        if (reset) {
            console.log(reset)
            setNumber(0);
        }
    }, [reset])

    return <div className={styles.number}>
        <button aria-label="decrease" onClick={decrease}>
            <Minus aria-hidden={true} focusable={false} />
        </button>
        {/* type="number" onChange={changeHandler} */}
        <input ref={ref} readOnly value={number} />
        <button aria-label="increase">
            <Plus aria-hidden={true} focusable={false} onClick={increase} />
        </button>
    </div>
});

export default NumberInput;