import React from 'react'
import EyeIco from '@/components/svgs/Eye'
import styles from '../Orders.module.scss'

const Order = () => {
	return (
		<div className={styles.orders__item}>
			<h3 className={styles.orders__item__title}>
				Разработать Мобильное приложение для интернет магазина
			</h3>
			<p className={styles.orders__item__desc}>
				Доброго времени суток, ищется человек который сможет построить
				возможность для определения является ли айпи адрес прокси, тором, или
				впн. Нам нужно искать свои базы данных в публичном или закупать платно,
				то есть использование апи сторонних сервисов..
			</p>
			<div className={styles.orders__item__price}>
				<span className={styles.orders__item__price__number}>Договорная</span>
				<span className={styles.orders__item__price__time}>1 час назад</span>
			</div>
			<div className={styles.orders__item__view}>
				<span className={styles.orders__item__view__response}>25 откликов</span>
				<span className={styles.orders__item__view__count}>
					<EyeIco />
					<span>232</span>
				</span>
			</div>
		</div>
	)
}

export default Order
