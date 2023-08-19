import Link from 'next/link'
import styles from '../Home.module.scss'
import HomeBestList from './home-best-list/HomeBestList'

const HomeBest = () => {
	return (
		<div className={styles.home__best}>
			<div className={styles.home__best__header}>
				<h3 className={styles.home__best__header__title}>
					Выбирайте лучших фрилансеров
				</h3>
				<Link className={styles.home__best__header__link} href={'/freelancers'}>
					Все фрилансеры
				</Link>
			</div>
			<HomeBestList />
		</div>
	)
}

export default HomeBest
