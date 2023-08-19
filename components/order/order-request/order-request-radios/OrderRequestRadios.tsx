import React from 'react'
import styles from './OrderRequestRadios.module.scss'

const OrderRequestRadios = ({selectedOption, type, handleOptionChange}) => {
    return (
        <div className={styles.radio__filter}>
            <label
                className={styles.radio__filter__label}
                htmlFor={type.id}
            >
                <input
                    className={
                        styles.radio__filter__label__input
                    }
                    type='radio'
                    id={type.id}
                    value={type.value}
                    checked={selectedOption === type.value}
                    onChange={handleOptionChange}
                />
                <span
                    className={
                        styles.radio__filter__label__fake
                    }
                ></span>
                <p
                    className={
                        styles.radio__filter__label__title
                    }
                >
                    {type.name}
                </p>
            </label>
        </div>
    )
}

export default OrderRequestRadios
