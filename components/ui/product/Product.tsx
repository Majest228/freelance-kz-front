import EyeIco from '@/components/svgs/Eye'
import styles from './Product.module.scss'

const Product = () => {
	return (
		<div className={styles.project}>
			<h3 className={styles.project__title}>
				Разработать Мобильное приложение для интернет магазина
			</h3>
			<div className={styles.project__price}>
				<p className={styles.project__price__sum}>Договорная</p>
				<p className={styles.project__price__data}>1 час назад</p>
			</div>
			<div className={styles.project__response}>
				<p className={styles.project__response__count}>25 откликов</p>
				<div className={styles.project__response__view}>
					<EyeIco />
					<p>232</p>
				</div>
			</div>
		</div>
	)
}

export default Product
