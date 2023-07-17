import Link from 'next/link'
import React from 'react'
import styles from '../Home.module.scss'
import HomeProjectsList from '../home-projects/home-projects-list/HomeProjectsList'

const HomeContest = () => {
	return (
		<div className={styles.home__projects}>
			<div className={styles.home__projects__header}>
				<h3 className={styles.home__projects__header__title}>Конкурсы</h3>
				<Link className={styles.home__projects__header__link} href={'/'}>
					Все проекты
				</Link>
			</div>
			<HomeProjectsList />
		</div>
	)
}

export default HomeContest
