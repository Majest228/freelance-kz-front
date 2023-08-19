import React from 'react'
import styles from '../../ui/product/Product.module.scss'
import { IProduct } from '@/components/home/home-projects/home-projects-list/HomeProjectsList'
import EyeIco from '@/components/svgs/Eye'
const OrderProduct = ({
	description,
	price,
	response,
	title,
	views,
}: IProduct) => {
	return (
		<div className={styles.project}>
			<h3 className={styles.project__title}>
				{title.length > 70 ? title.slice(0, 70) + '...' : title}
			</h3>
			<div className={styles.project__price}>
				<p className={styles.project__price__sum}>
					{price == 0 ? 'Договорная' : price} тг
				</p>
				<p className={styles.project__price__data}>1 час назад</p>
			</div>
			<div className={styles.project__response}>
				<p className={styles.project__response__count}>{response} откликов</p>
				<div className={styles.project__response__view}>
					<EyeIco />
					<p>{views}</p>
				</div>
			</div>
		</div>
	)
}

export default OrderProduct
