import React from 'react'
import styles from './FleelancersItem.module.scss'
import ImageComponent from '@/components/ui/image/ImageComponent'
import user from '../../../../assets/user.png'
import StatusDot from '@/components/ui/status-dot/StatusDot'
import HomeIco from '@/components/svgs/Home'
import StarIco from '@/components/svgs/Star'
import Link from 'next/link'
const FleelancersItem = ({ freelancer }) => {
	console.log(freelancer, 'free')
	return (
		<Link
			href={`/freelancers/${freelancer?.id}`}
			className={styles.freelancers__item}
		>
			<div className={styles.freelancers__item__left}>
				<ImageComponent
					image={`http://localhost:7777/api/portfolio/users/${freelancer?.avatarPath}`}
					alt={user}
					borderRadius={21}
					height={153}
					width={153}
				/>
				<div className={styles.freelancers__item__left__info}>
					<div className={styles.freelancers__item__left__info__name}>
						<h3>
							{freelancer?.name} {freelancer?.surname}
						</h3>
						<p>{freelancer?.login}</p>
					</div>
					<div className={styles.freelancers__item__left__info__age}>
						<p>22 года, Казахстан</p>
					</div>
					<div className={styles.freelancers__item__left__info__status}>
						<StatusDot background='#D1D1D1' />
						<p>Был онлайн 14 часов назад</p>
					</div>
					<div className={styles.freelancers__item__left__info__date}>
						<HomeIco />
						<p>2 года на сервисе</p>
					</div>
					<div className={styles.freelancers__item__left__info__review}>
						<div
							className={styles.freelancers__item__left__info__review__stars}
						>
							<StarIco />
							<StarIco />
							<StarIco />
							<StarIco />
							<StarIco />
						</div>
						<p>2 года на сервисе</p>
					</div>
				</div>
			</div>
			<div className={styles.freelancers__item__right}>
				<p>$10 / час</p>
			</div>
		</Link>
	)
}

export default FleelancersItem
