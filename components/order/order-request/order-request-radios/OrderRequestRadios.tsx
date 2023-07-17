import React from 'react'
import styles from './OrderRequestRadios.module.scss'

const OrderRequestRadios = () => {
	return (
		<div className={styles.radio}>
			<label className={styles.radio__label}>
				<input className={styles.radio__label__input} type='checkbox' />
				<span className={styles.radio__label__fake}></span>
				<p className={styles.radio__label__title}>
					Комиссию 9% оплачивает заказчик
				</p>
			</label>
		</div>
	)
}

export default OrderRequestRadios
