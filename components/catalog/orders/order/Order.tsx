import React from 'react'
import EyeIco from '@/components/svgs/Eye'
import styles from '../Orders.module.scss'
import Link from 'next/link'
import {useMutation} from "react-query";
import {OrdersService} from "@/services/orders/orders.service";
import {useGetDateTime} from "@/hooks/useGetDateTime";

const Order = ({order}) => {
    const currentDate = new Date()
    const {formattedTime} = useGetDateTime(order.createdAt)

    const {formattedTime: formattedTimeCurrentDate} = useGetDateTime(currentDate)

    const newFormattedTimeCurrentDate = formattedTimeCurrentDate.split('-')
    const newFormattedTime = formattedTime.split('-')

    const newCurrentDate = new Date(
        newFormattedTimeCurrentDate[0],
        parseInt(newFormattedTimeCurrentDate[1]) - 1,
        newFormattedTimeCurrentDate[2],
        newFormattedTimeCurrentDate[3].split(':')[0],
        newFormattedTimeCurrentDate[3].split(':')[1],
        newFormattedTimeCurrentDate[3].split(':')[2]
    )

    const declension = (number, titles) => {
        const cases = [2, 0, 1, 1, 1, 2];
        return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
    };
    const newOrderDate = new Date(
        newFormattedTime[0],
        parseInt(newFormattedTime[1]) - 1,
        newFormattedTime[2],
        newFormattedTime[3].split(':')[0],
        newFormattedTime[3].split(':')[1],
        newFormattedTime[3].split(':')[2]
    )
    let timeDifferenceInMillis = newCurrentDate - newOrderDate;

    const monthsDays = 30;
    let days = Math.floor(timeDifferenceInMillis / (1000 * 60 * 60 * 24));
    timeDifferenceInMillis -= days * (1000 * 60 * 60 * 24);

    let hours = Math.floor(timeDifferenceInMillis / (1000 * 60 * 60));
    timeDifferenceInMillis -= hours * (1000 * 60 * 60);

    let minutes = Math.floor(timeDifferenceInMillis / (1000 * 60));
    timeDifferenceInMillis -= minutes * (1000 * 60);

    let seconds = Math.floor(timeDifferenceInMillis / 1000);
    let months = Math.floor(days / monthsDays)
    const remainingDays = days % monthsDays;


    const viewDate = () => {
        if (months) {
            const monthText = declension(months, ['месяц', 'месяца', 'месяцев']);
            return <div>{`${months} ${monthText}  назад`}</div>;

        } else if (days) {
            const daysText = declension(days, ['день', 'дня', 'дней']);
            return <div>{`${days} ${daysText} назад`}</div>;
        } else if (hours || minutes) {
            const hoursText = declension(hours, ['час', 'часа', 'часов']);
            const minutesText = declension(minutes, ['минута', 'минуты', 'минут']);
            return (
                <div>
                    {hours && `${hours} ${hoursText}`}
                    {minutes && ` ${minutes} ${minutesText} назад`}
                </div>
            );
        } else {
            return <div>Только что</div>;
        }
    }

    const {mutate} = useMutation(['update-view'], (id) => OrdersService.updateViewCount(order.id))
    return (
        <div className={styles.orders__item}>
            <Link onClick={() => mutate(order.id)} href={`/orders/${order.id}`}
                  className={styles.orders__item__title}>
                {order?.title}
            </Link>
            <p className={styles.orders__item__desc} dangerouslySetInnerHTML={{
                __html: order?.description,
            }}></p>

            <div className={styles.orders__item__price}>
				<span className={styles.orders__item__price__number}>
					{order?.price == 0 ? 'Договорная' : order?.price} тг
				</span>
                <span className={styles.orders__item__price__time}>
                    {viewDate()}
                </span>
            </div>
            <div className={styles.orders__item__view}>
				<span className={styles.orders__item__view__response}>
					{order?.response} откликов
				</span>
                <span className={styles.orders__item__view__count}>
					<EyeIco/>
					<span>{order?.views}</span>
				</span>
            </div>
        </div>
    )
}

export default Order
