import styles from './OrderProfile.module.scss'
import ImageComponent from '@/components/ui/image/ImageComponent'
import ImageDefault from "@/components/ui/image/ImageDefault";
import React from "react";
import {useCheckRegister} from "@/hooks/useCheckRegister";

const OrderProfile = ({owner}) => {
    console.log(owner, 'owner')
    const {months, minutes, days, seconds, hours} = useCheckRegister(owner?.createdAt)
    console.log(months, days, minutes, hours, seconds)
    const declension = (number, titles) => {
        const cases = [2, 0, 1, 1, 1, 2];
        return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
    };
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
        <div className={styles.order__profile}>
            <div className={styles.order__profile__user}>
                {owner?.avatarPath == "" ? (
                    <ImageDefault
                        borderRadius={50}
                        fz={48}
                        width={100}
                        height={100}
                        text={owner?.login[0]?.toUpperCase()}
                    />
                ) : (
                    <ImageComponent
                        alt='profile'
                        borderRadius={50}
                        width={100}
                        height={100}
                        image={`http://localhost:7777/api/portfolio/users/${owner?.avatarPath}`}
                    />
                )}
                <h3 className={styles.order__profile__user__name}>
                    {owner?.name} {owner?.surname}
                </h3>
                {owner?.ProfessionToUser.map(item => (
                    <p className={styles.order__profile__user__desc}>
                        {item?.Profession.name}
                    </p>
                ))}
                <p className={styles.order__profile__user__customer}>Заказчик</p>
            </div>

            <div className={styles.order__profile__state}>
                <h3 className={styles.order__profile__state__title}>
                    Статистика заказчика
                </h3>
                <div className={styles.order__profile__state__end}>
                    <p>Завершенные заказы</p>
                    <span>0</span>
                </div>
                <div className={styles.order__profile__state__search}>
                    <p>В поиске исполнителя</p>
                    <span>2</span>
                </div>
                <div className={styles.order__profile__state__order}>
                    <p>Заказы в арбитраже</p>
                    <span>0</span>
                </div>
                <div className={styles.order__profile__state__review}>
                    <p className={styles.order__profile__state__review__text}>
                        Заказы в арбитраже
                    </p>
                    <div>
						<span className={styles.order__profile__state__review__negative}>
							-0
						</span>
                        <span className={styles.order__profile__state__review__slash}>
							/
						</span>
                        <span className={styles.order__profile__state__review__positive}>
							+0
						</span>
                    </div>
                </div>
                <div className={styles.order__profile__state__reg}>
                    <p>Зарегистрирован</p>
                    <span>
                       {viewDate()}
                    </span>
                </div>
                <div className={styles.order__profile__state__reg}>
                    <p>Был последний раз</p>
                    <span>Сегодня</span>
                </div>
                <div className={styles.order__profile__state__verify}>
                    <h3>Верификация</h3>
                    <p>Пользователь верифицирован по номеру телефона</p>
                </div>
                <div className={styles.order__profile__state__verify}>
                    <h3>Контакты заказчика</h3>
                    <p>Пользователь не указал никаких контактов</p>
                </div>
            </div>
        </div>
    )
}

export default OrderProfile
