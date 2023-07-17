import styles from './OrderRequest.module.scss'
import OrderRequestRadios from './order-request-radios/OrderRequestRadios'

const OrderRequest = () => {
	return (
		<div className={styles.order__request}>
			<h3 className={styles.order__request__title}>Ваша заявка</h3>
			<div className={styles.order__request__inputs}>
				<div className={styles.order__request__inputs__item}>
					<input type='text' placeholder='Цена' />
					<span>KZT</span>
				</div>
				<div className={styles.order__request__inputs__item}>
					<input type='text' placeholder='Сроки' />
					<span>Дней</span>
				</div>
			</div>
			<div className={styles.order__request__radio}>
				<OrderRequestRadios />
				<OrderRequestRadios />
			</div>
			<div className={styles.order__request__desc}>
				<input type='text' placeholder='Комментарий..' />
			</div>
			<button className={styles.order__request__button}>Добавить заявку</button>
		</div>
	)
}

export default OrderRequest
