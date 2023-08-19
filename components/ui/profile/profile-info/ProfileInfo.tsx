import HomeIco from '@/components/svgs/Home'
import StarIco from '@/components/svgs/Star'
import Image from 'next/image'
import React from 'react'
import StatusDot from '../../status-dot/StatusDot'
import styles from './ProfileInfo.module.scss'
import country from '../../../../assets/country.png'
import Pencil from '@/components/svgs/Pencil'
import {useQuery} from 'react-query'
import {CitiesService} from '@/services/cities/cities.service'
import {useCheckRegister} from "@/hooks/useCheckRegister";

const ProfileInfo = ({profile, freelancer, type, setIsModal}) => {
    const {data: city, isLoading} = useQuery(['cities', profile?.cityId], () =>
        CitiesService.getById(profile?.cityId)
    )

    console.log('city', city, 'profile', profile)

    const {data: region} = useQuery(['cities', city?.parentId], () =>
        CitiesService.getById(city?.parentId)
    )

    const {months, minutes, days, seconds, hours} = useCheckRegister(profile?.createdAt)

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
        <div className={styles.profile__info}>
            <>
                <div className={styles.profile__info__name}>
                    <h3>{profile?.name == '' || profile?.surname == '' ? "" : profile?.name + ' ' + profile?.surname}</h3>
                    {type == 'settings' ? (
                        <button onClick={() => setIsModal(true)}>
                            <Pencil/>
                        </button>
                    ) : (
                        ''
                    )}
                </div>
                {profile?.name == '' || profile?.surname == '' ? "" : profile?.ProfessionToUser.map(item => (
                    <p className={styles.profile__info__profession}>
                        {item.Profession.name}
                    </p>
                ))}
                {
                    profile?.name == '' || profile?.surname == '' ? "" : (
                        <>
                            <div className={styles.profile__info__status}>
                                <div className={styles.profile__info__status__show}>
                                    <StatusDot background='#D1D1D1'/>
                                    <p className={styles.profile__info__status__show__text}>
                                        Был онлайн 14 часов назад
                                    </p>
                                </div>
                                <div className={styles.profile__info__status__location}>
                                    <Image src={country} alt='country' width={18} height={13}/>
                                    <p>
                                        {region?.name},{' ' + city?.name}
                                    </p>
                                </div>
                            </div>
                            <div className={styles.profile__info__date}>
                                <div className={styles.profile__info__date__reg}>
                                    <HomeIco/>
                                    <p>{viewDate()}</p>
                                </div>
                                <div className={styles.profile__info__date__review}>
                                    <div className={styles.profile__info__date__review__stars}>
                                        <StarIco/>
                                        <StarIco/>
                                        <StarIco/>
                                        <StarIco/>
                                        <StarIco/>
                                    </div>
                                    <p>133 отзыва</p>
                                </div>
                            </div>
                        </>
                    )
                }

            </>
        </div>
    )
}

export default ProfileInfo
