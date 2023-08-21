import styles from './OrderRequestList.module.scss'
import ImageDefault from "@/components/ui/image/ImageDefault";
import ImageComponent from "@/components/ui/image/ImageComponent";
import React from "react";
import {useCheckRegister} from "@/hooks/useCheckRegister";
import Close from "@/components/svgs/Close";
import {useMutation} from "react-query";
import {OrdersService} from "@/services/orders/orders.service";

const OrderRequestList = ({item, profileId, ownerId}) => {
    console.log('item', item)
    const {months, minutes, days, seconds, hours} = useCheckRegister(item?.responder?.createdAt)

    const declension = (number, titles) => {
        const cases = [2, 0, 1, 1, 1, 2];
        return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
    };

    const {mutate} = useMutation(['delete response'], (responseId: number) => OrdersService.removeResponseOrder(responseId))


    const viewDate = () => {
        if (months) {
            const monthText = declension(months, ['месяц', 'месяца', 'месяцев']);
            return <div>{`${months} ${monthText}  на сервисе`}</div>;
        } else if (days) {
            const daysText = declension(days, ['день', 'дня', 'дней']);
            return <div>{`${days} ${daysText} на сервисе`}</div>;
        } else if (hours || minutes) {
            const hoursText = declension(hours, ['час', 'часа', 'часов']);
            const minutesText = declension(minutes, ['минута', 'минуты', 'минут']);
            return (
                <div>
                    {hours && `${hours} ${hoursText}`}
                    {minutes && ` ${minutes} ${minutesText} на сервисе`}
                </div>
            );
        } else {
            return <div>Нет данных</div>;
        }
    }
    return (
        <div className={styles.order__request__list__item}>
            <div className={styles.order__request__list__item__content}>
                <div className={styles.order__request__list__item__content__profile}>
                    {item?.responder?.avatarPath == '' ? (
                        <ImageDefault
                            borderRadius={50}
                            fz={48}
                            width={80}
                            height={80}
                            text={item?.responder?.login[0]?.toUpperCase()}
                        />
                    ) : (
                        <ImageComponent
                            alt={'avatar'}
                            width={80}
                            height={80}
                            borderRadius={50}
                            image={`http://localhost:7777/api/portfolio/users/${item?.responder?.avatarPat}`}
                        />
                    )}
                    <div className={styles.order__request__list__item__content__profile__info}>
                        <div className={styles.order__request__list__item__content__profile__info__header}>
                            <div className={styles.order__request__list__item__content__profile__info__header__name}>
                                <h3>{item?.responder?.name == '' || item?.responder?.surname == '' ? "" : item?.responder?.name + ' ' + item?.responder?.surname}</h3>
                            </div>
                            {
                                profileId == item?.responder?.id ? (
                                    <button
                                        onClick={() => mutate(item.id)}
                                        className={styles.order__request__list__item__content__profile__info__header__close}>
                                        <Close stroke={"#DC143C"}/>
                                    </button>
                                ) : ""
                            }

                        </div>

                        <div className={styles.order__request__list__item__content__profile__info__profession}>
                            {item?.responder?.ProfessionToUser.map(p => (
                                <p className={styles.order__request__list__item__content__profile__info__profession__text}>
                                    {p?.Profession?.name}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={styles.order__request__list__item__content__days}>
                    <h3>Количество дней:</h3>
                    <p>{item?.term}</p>
                </div>
                <div className={styles.order__request__list__item__content__price}>
                    <h3>Цена:</h3>
                    <p>{item?.price} тг</p>
                </div>
                <div className={styles.order__request__list__item__content__comment}>
                    <h3>Комментарий:</h3>
                    <p>{item?.comment}</p>
                </div>
                {ownerId == profileId ?
                    <button className={styles.order__request__list__item__content__accept}>Выбрать
                        исполнителем</button> : ""}

            </div>
        </div>
    )
}

export default OrderRequestList