import React from 'react'
import styles from './Orders.module.scss'
import Order from './order/Order'
import {useQuery} from 'react-query'
import {OrdersService} from '@/services/orders/orders.service'

const Orders = () => {
    const {data: orders, isLoading} = useQuery('orders', () =>
        OrdersService.getAll()
    )
    return (
        <div className={styles.orders}>
            {isLoading ? [] : orders.map(order => <Order order={order}/>)}
        </div>
    )
}

export default Orders
