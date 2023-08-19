import EyeIco from '@/components/svgs/Eye'
import styles from './Product.module.scss'
import {IProduct} from '@/components/home/home-projects/home-projects-list/HomeProjectsList'
import Link from 'next/link'
import {useGetDateTime} from "@/hooks/useGetDateTime";
import React from "react";

const Product = ({
                     description,
                     price,
                     response,
                     title,
                     views,
                     id,
                     createdAt
                 }: IProduct) => {

    const currentDate = new Date()
    const {formattedTime} = useGetDateTime(createdAt)

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
            return <div>Нет данных</div>;
        }
    }
    return (
        <div className={styles.project}>
            <Link href={`/orders/${id}`} className={styles.project__title}>
                {title.length > 70 ? title.slice(0, 70) + '...' : title}
            </Link>
            <div className={styles.project__price}>
                <p className={styles.project__price__sum}>
                    {price == 0 ? 'Договорная' : price} тг
                </p>
                <p className={styles.project__price__data}>{viewDate()}</p>
            </div>
            <div className={styles.project__response}>
                <p className={styles.project__response__count}>{response} откликов</p>
                <div className={styles.project__response__view}>
                    <EyeIco/>
                    <p>{views}</p>
                </div>
            </div>
        </div>
    )
}

export default Product
