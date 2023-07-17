import styles from '../../Home.module.scss'
import HomeBestItem from './home-best-item/HomeBestItem'

const HomeBestList = () => {
	return (
		<div className={styles.home__best__list}>
			<HomeBestItem />
			<HomeBestItem />
			<HomeBestItem />
			<HomeBestItem />
			<HomeBestItem />
			<HomeBestItem />
		</div>
	)
}

export default HomeBestList
