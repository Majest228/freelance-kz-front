'use client'
import React from 'react'
import styles from './Order.module.scss'
import ShareIco from '../svgs/Share'
import BulbIco from '../svgs/Bulb'
import Line from '../ui/line/Line'
import OrderDescription from './order-description/OrderDescription'
import OrderApplication from './order-application/OrderApplication'
import OrderRequest from './order-request/OrderRequest'
import OrderProfile from './order-profile/OrderProfile'
import {useQuery} from 'react-query'
import {OrdersService} from '@/services/orders/orders.service'
import {useParams} from 'next/navigation'
import {UserService} from '@/services/user/user.service'
import {useGetDateTime} from "@/hooks/useGetDateTime";
import OrderRequestList from "@/components/order/order-request/order-request-list/OrderRequestList";


export interface Month {
    id: string;
    name: string;
}

export const months: Month[] = [
    {id: "01", name: "Января"},
    {id: "02", name: "Февраля"},
    {id: "03", name: "Марта"},
    {id: "04", name: "Апреля"},
    {id: "05", name: "Майя"},
    {id: "06", name: "Июня"},
    {id: "07", name: "Июля"},
    {id: "08", name: "Августа"},
    {id: "09", name: "Сентября"},
    {id: "10", name: "Октября"},
    {id: "11", name: "Ноября"},
    {id: "12", name: "Декабря"},
];

const Order = () => {
    const params = useParams()
    const {data: order, isLoading} = useQuery(['order', params.slug], () =>
        OrdersService.getById(+params.slug)
    )

    const {data: owner, isLoading: isLoadingOwner} = useQuery(
        ['owner', isLoading ? null : order.ownerId],
        () => UserService.getFreelancerById(isLoading ? null : order?.ownerId), {enabled: !!order?.ownerId}
    )


    const {data: profile, isLoading: isLoadingProfile} = useQuery(['profile'], () => UserService.getProfile())


    const {
        data: dataOrderResponse,
        isLoading: isLoadingResponse
    } = useQuery(['get-response', params.slug], () => OrdersService.getResponseById(+params.slug))
    const {formattedTime} = useGetDateTime(order?.createdAt)
    const newFormattedTime = formattedTime.split('-')
    const findMonth = (id: string) => months.find((el) => el.id == id)
    const checkUser = !!dataOrderResponse?.find(r => r.responder?.id == profile?.id)
    console.log('checkUser', checkUser)
    return (
        <div className={styles.order}>
            <div className={styles.order__container}>
                <div className={styles.order__header}>
                    <div className={styles.order__header__left}>
                        <p className={styles.order__header__left__time}>
                            Опубликовано {newFormattedTime[2]} {findMonth((newFormattedTime[1]))?.name.toLowerCase()} {newFormattedTime[0]} {newFormattedTime[3]}
                        </p>
                        <p className={styles.order__header__left__count}>
                            {order?.response} откликов
                        </p>
                    </div>
                    <div className={styles.order__header__right}>
                        <button className={styles.order__header__right__share}>
                            <ShareIco/>
                        </button>
                        <button className={styles.order__header__right__bulb}>
                            <BulbIco/>
                        </button>
                    </div>
                </div>
                <div className={styles.order__title}>
                    <h3>{order?.title}</h3>
                    <p>{order?.price} KZT</p>
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
                <Line top={31}/>
                <div className={styles.order__content}>
                    <div className={styles.order__content__left}>
                        <OrderDescription order={order}/>
                        <OrderApplication/>
                        {owner?.id == profile?.id || checkUser ? "" :
                            <>
                                <Line top={31} bottom={40}/>
                                <OrderRequest/>
                            </>
                        }
                        <Line top={31} bottom={40}/>
                        {dataOrderResponse?.map(item => <OrderRequestList ownerId={owner?.id} profileId={profile?.id}
                                                                          orderId={order.id}
                                                                          item={item}/>)}
                    </div>
                    <div className={styles.order__content__right}>
                        <OrderProfile owner={owner}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order
