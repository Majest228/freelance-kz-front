import Product from '@/components/ui/product/Product'
import styles from '../../Home.module.scss'

const HomeProjectsList = () => {
	return (
		<div className={styles.home__projects__list}>
			<Product />
			<Product />
			<Product />
			<Product />
			<Product />
			<Product />
		</div>
	)
}

export default HomeProjectsList
