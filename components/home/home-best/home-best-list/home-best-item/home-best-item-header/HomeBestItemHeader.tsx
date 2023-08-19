import Image from 'next/image'
import React from 'react'
import styles from '../../../../Home.module.scss'
import StarIco from '@/components/svgs/Star'
import photo from '../../../../../../assets/photo.png'
import { IFreelancer } from '../../HomeBestList'
import { useQuery } from 'react-query'
import { UserService } from '@/services/user/user.service'
import Link from 'next/link'
import ImageComponent from '@/components/ui/image/ImageComponent'
import ImageDefault from '@/components/ui/image/ImageDefault'
const HomeBestItemHeader = ({
	id,
	name,
	avatarPath,
	cv,
	date_born,
	description,
	email,
	login,
	phone,
	rating,
	smallDescription,
	surname,
	title,
}: IFreelancer) => {
	const stars = Array.from({ length: 5 })
	console.log('login', login)

	return (
		<div className={styles.home__best__list__item__header}>
			{avatarPath == '' ? (
				<ImageDefault
					borderRadius={21}
					fz={48}
					width={80}
					height={80}
					text={login[0]?.toUpperCase()}
				/>
			) : (
				<ImageComponent
					alt={'photo'}
					width={80}
					height={80}
					borderRadius={0}
					image={`http://localhost:7777/api/portfolio/users/${avatarPath}`}
				/>
			)}
			<div className={styles.home__best__list__item__header__desc}>
				<Link
					href={`/freelancers/${id}`}
					className={styles.home__best__list__item__header__desc__text}
				>
					{name} {surname}
				</Link>
				<div className={styles.home__best__list__item__header__desc__review}>
					<div
						className={
							styles.home__best__list__item__header__desc__review__stars
						}
					>
						{stars.map((_, idx) => (
							<StarIco />
						))}
					</div>
					<p
						className={
							styles.home__best__list__item__header__desc__review__count
						}
					>
						45 отзывов
					</p>
				</div>
			</div>
		</div>
	)
}

export default HomeBestItemHeader
