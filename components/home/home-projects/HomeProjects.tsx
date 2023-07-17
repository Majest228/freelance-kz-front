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
				<Link className={styles.home__projects__header__link} href={'/'}>
					Все проекты
				</Link>
			</div>
			<HomeProjectsList />
		</div>
	)
}

export default HomeProjects
