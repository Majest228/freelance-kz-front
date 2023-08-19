import { CitiesService } from '@/services/cities/cities.service'
import React from 'react'
import { useQuery } from 'react-query'
import styles from './FreelanderInfo.module.scss'
import StatusDot from '@/components/ui/status-dot/StatusDot'
import Image from 'next/image'
import HomeIco from '@/components/svgs/Home'
import StarIco from '@/components/svgs/Star'
import country from '../../../assets/country.png'
const FreelancerInfo = ({ freelancer }) => {
	const { data: city, isLoading } = useQuery(
		['cities', freelancer?.cityId],
		() => CitiesService.getById(freelancer?.cityId)
	)

	const { data: region } = useQuery(['cities', city?.parentId], () =>
		CitiesService.getById(city?.parentId)
	)
	return (
		<div className={styles.freelancer__info}>
			{freelancer?.name == '' ||
			freelancer?.name == undefined ||
			freelancer?.surname == '' ||
			freelancer?.surname == undefined ? (
				''
			) : (
				<>
					<div className={styles.freelancer__info__name}>
						<h3>{freelancer?.name + ' ' + freelancer?.surname}</h3>
					</div>
					{freelancer?.ProfessionToUser.map(item => (
						<p className={styles.freelancer__info__profession}>
							{item.Profession.name}
						</p>
					))}

					<div className={styles.freelancer__info__status}>
						<div className={styles.freelancer__info__status__show}>
							<StatusDot background='#D1D1D1' />
							<p className={styles.freelancer__info__status__show__text}>
								Был онлайн 14 часов назад
							</p>
						</div>
						<div className={styles.freelancer__info__status__location}>
							<Image src={country} alt='country' width={18} height={13} />
							<p>
								{region?.name},{' ' + city?.name}
							</p>
						</div>
					</div>
					<div className={styles.freelancer__info__date}>
						<div className={styles.freelancer__info__date__reg}>
							<HomeIco />
							<p>2 года на сервисе</p>
						</div>
						<div className={styles.freelancer__info__date__review}>
							<div className={styles.freelancer__info__date__review__stars}>
								<StarIco />
								<StarIco />
								<StarIco />
								<StarIco />
								<StarIco />
							</div>
							<p>133 отзыва</p>
						</div>
					</div>
				</>
			)}
		</div>
	)
}

export default FreelancerInfo
