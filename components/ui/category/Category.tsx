import styles from './Category.module.scss'
import CategoryItem from './category-item/CategoryItem'

const Category = () => {
	return (
		<div className={styles.categories}>
			<CategoryItem />
		</div>
	)
}

export default Category
