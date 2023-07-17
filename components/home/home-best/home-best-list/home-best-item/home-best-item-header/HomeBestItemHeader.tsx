import Image from 'next/image'
import React from 'react'
import styles from '../../../../Home.module.scss'
import StarIco from '@/components/svgs/Star'
import photo from '../../../../../../assets/photo.png'
const HomeBestItemHeader = () => {
	const stars = Array.from({ length: 5 })
	return (
		<div className={styles.home__best__list__item__header}>
			<Image src={photo} alt='photo' width={80} height={80} />
			<div className={styles.home__best__list__item__header__desc}>
				<h3 className={styles.home__best__list__item__header__desc__text}>
					Алексей Бычков
				</h3>
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
