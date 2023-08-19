import Link from 'next/link'
import styles from '../Home.module.scss'
import HomeProjectsList from './home-projects-list/HomeProjectsList'

const HomeProjects = () => {
	return (
		<div className={styles.home__projects}>
			<div className={styles.home__projects__header}>
				<h3 className={styles.home__projects__header__title}>
					Последние проекты
				</h3>
				<Link className={styles.home__projects__header__link} href={'/orders'}>
					Все проекты
				</Link>
			</div>
			<HomeProjectsList type='order' />
		</div>
	)
}

export default HomeProjects
