import React from 'react'
import styles from './Order.module.scss'
import ShareIco from '../svgs/Share'
import BulbIco from '../svgs/Bulb'
import Line from '../ui/line/Line'
import Image from 'next/image'
import application from '../../assets/application.png'
import OrderDescription from './order-description/OrderDescription'
import OrderApplication from './order-application/OrderApplication'
import OrderRequest from './order-request/OrderRequest'
import OrderProfile from './order-profile/OrderProfile'

const Order = () => {
	return (
		<div className={styles.order}>
			<div className={styles.order__container}>
				<div className={styles.order__header}>
					<div className={styles.order__header__left}>
						<p className={styles.order__header__left__time}>
							Опубликовано вчера в 14:58
						</p>
						<p className={styles.order__header__left__count}>48 откликов</p>
					</div>
					<div className={styles.order__header__right}>
						<button className={styles.order__header__right__share}>
							<ShareIco />
						</button>
						<button className={styles.order__header__right__bulb}>
							<BulbIco />
						</button>
					</div>
				</div>
				<div className={styles.order__title}>
					<h3>Дизайн TAPLINK - Лендинг</h3>
					<p>500 KZT</p>
				</div>
				<div className={styles.order__status}>
					<div className={styles.order__status__item}>
						<div className={styles.order__status__item__content}>
							<p>Прием заявок</p>
						</div>
					</div>
					<div className={styles.order__status__item}>
						<div className={styles.order__status__item__content}>
							<p>Прием заявок</p>
						</div>
					</div>
					<div className={styles.order__status__item}>
						<div className={styles.order__status__item__content}>
							<p>Прием заявок</p>
						</div>
					</div>
					<div className={styles.order__status__item}>
						<div className={styles.order__status__item__content}>
							<p>Прием заявок</p>
						</div>
					</div>
				</div>
				<Line top={31} />
				<div className={styles.order__content}>
					<div className={styles.order__content__left}>
						<OrderDescription />
						<OrderApplication />
						<Line top={31} bottom={40} />
						<OrderRequest />
					</div>
					<div className={styles.order__content__right}>
						<OrderProfile />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Order
