import ArrowIco from '@/components/svgs/Arrow'
import { IFilters } from '../filter.interface'
import styles from './Filter.module.scss'
import ArrowFilterIco from '@/components/svgs/ArrowFilter'

const Filter = ({ filter }: IFilters) => {
	return (
		<div key={filter.id} className={styles.filter}>
			<label className={styles.filter__label} htmlFor={filter.id}>
				<input
					className={styles.filter__label__input}
					type='checkbox'
					id={filter.id}
				/>
				<span className={styles.filter__label__fake}></span>
				<div className={styles.filter__label__text}>
					<p className={styles.filter__label__text__title}>{filter.name}</p>
					<p className={styles.filter__label__text__count}>{filter.count}</p>
				</div>
			</label>
			<button className={styles.filter__button}>
				<ArrowFilterIco />
			</button>
		</div>
	)
}

export default Filter
