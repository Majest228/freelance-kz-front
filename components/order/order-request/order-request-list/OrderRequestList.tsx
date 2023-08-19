import styles from './OrderRequestList.module.scss'
import ImageDefault from "@/components/ui/image/ImageDefault";
import ImageComponent from "@/components/ui/image/ImageComponent";
import React from "react";
import {useCheckRegister} from "@/hooks/useCheckRegister";

const OrderRequestList = ({item}) => {

    const {months, minutes, days, seconds, hours} = useCheckRegister(item?.responder?.createdAt)

    const declension = (number, titles) => {
        const cases = [2, 0, 1, 1, 1, 2];
        return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
    };
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
                            fz={24}
                            width={60}
                            height={60}
                            text={item?.responder?.login[0]?.toUpperCase()}
                        />
                    ) : (
                        <ImageComponent
                            alt={'avatar'}
                            width={100}
                            height={100}
                            borderRadius={50}
                            image={`http://localhost:7777/api/portfolio/users/${item?.responder?.avatarPat}`}
                        />
                    )}
                    <div className={styles.order__request__list__item__content__profile__info}>
                        <div className={styles.order__request__list__item__content__profile__info__name}>
                            <h3>{item?.responder?.name == '' || item?.responder?.surname == '' ? "" : item?.responder?.name + ' ' + item?.responder?.surname}</h3>
                        </div>
                        <div className={styles.order__request__list__item__content__profile__info__profession}>
                            {item?.responder?.ProfessionToUser.map(p => (
                                <p className={styles.order__request__list__item__content__profile__info__profession__text}>
                                    {p?.Profession?.name}
                                </p>
                            ))}
                        </div>

                        {/*<div className={styles.order__request__list__item__content__profile__info__status}>*/}
                        {/*    <div className={styles.order__request__list__item__content__profile__info__status__show}>*/}
                        {/*        <StatusDot background='#D1D1D1'/>*/}
                        {/*        <p className={styles.order__request__list__item__content__profile__info__status__show__text}>*/}
                        {/*            Был онлайн 14 часов назад*/}
                        {/*        </p>*/}
                        {/*    </div>*/}
                        {/*    /!*<div*!/*/}
                        {/*    /!*    className={styles.order__request__list__item__content__profile__info__status__location}>*!/*/}
                        {/*    /!*    <Image src={country} alt='country' width={18} height={13}/>*!/*/}
                        {/*    /!*    <p>*!/*/}
                        {/*    /!*        {region?.name},{' ' + city?.name}*!/*/}
                        {/*    /!*    </p>*!/*/}
                        {/*    /!*</div>*!/*/}
                        {/*</div>*/}
                        {/*<div className={styles.order__request__list__item__content__profile__info__date}>*/}
                        {/*    <div className={styles.order__request__list__item__content__profile__info__date__reg}>*/}
                        {/*        <HomeIco/>*/}
                        {/*        <p>{viewDate()}</p>*/}
                        {/*    </div>*/}
                        {/*    <div className={styles.order__request__list__item__content__profile__info__date__review}>*/}
                        {/*        <div*/}
                        {/*            className={styles.order__request__list__item__content__profile__info__date__review__stars}>*/}
                        {/*            <StarIco/>*/}
                        {/*            <StarIco/>*/}
                        {/*            <StarIco/>*/}
                        {/*            <StarIco/>*/}
                        {/*            <StarIco/>*/}
                        {/*        </div>*/}
                        {/*        <p>133 отзыва</p>*/}
                        {/*    </div>*/}
                        {/*</div>*/}


                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderRequestList