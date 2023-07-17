import React from 'react'
import styles from './Orders.module.scss'
import EyeIco from '@/components/svgs/Eye'
import Order from './order/Order'

const Orders = () => {
	return (
		<div className={styles.orders}>
			<Order />
			<Order />
			<Order />
			<Order />
			<Order />
			<Order />
			<Order />
			<Order />
		</div>
	)
}

export default Orders
