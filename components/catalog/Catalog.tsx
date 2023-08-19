'use client'
import Link from 'next/link'
import styles from './Catalog.module.scss'
import { usePathname } from 'next/navigation'
import Line from '../ui/line/Line'
import Search from '../ui/search/Search'
import Orders from './orders/Orders'
import Filters from './filters/Filters'
import Freelancers from './freelancers/Freelancers'

const Catalog = () => {
	const type_catalog = [
		{ id: 'orders', name: 'заказов' },
		{ id: 'freelancers', name: 'фрилансеров' },
	]
	const data_filters = [
		{
			id: 0,
			name: 'Новые',
		},
		{
			id: 1,
			name: 'Релевантные',
		},
		{
			id: 2,
			name: 'За всё время',
		},
		{
			id: 3,
			name: 'За сутки',
		},
		{
			id: 4,
			name: 'За три дня',
		},
		{
			id: 5,
			name: 'За неделю',
		},
	]
	const params = usePathname()
	const paramsWithoutFirstElement = params.slice(1, params.length)
	const currentType = type_catalog.find(
		type => type.id == paramsWithoutFirstElement
	)
	return (
		<div className={styles.catalog}>
			<div className={styles.catalog__container}>
				<div className={styles.catalog__header}>
					<h3 className={styles.catalog__header__title}>
						{currentType?.id == 'orders'
							? 'Поиск заказов на фрилансе'
							: 'Поиск фрилансеров'}
					</h3>
					<Link className={styles.catalog__header__link} href={'/'}>
						1957
						{currentType?.id == 'orders'
							? 'открытых заказов'
							: 'свободных фрилансеров'}
					</Link>
				</div>
				<Line top={40} />
				<div className={styles.catalog__content}>
					<div className={styles.catalog__content__left}>
						<Search
							text={
								currentType?.id == 'orders'
									? 'Поиск заказа'
									: 'Поиск фрилансера'
							}
						/>
						{currentType?.id == 'orders' ? (
							<div className={styles.catalog__content__left__filters}>
								{data_filters.map(item => (
									<li key={item.id}>
										<p>{item.name}</p>
									</li>
								))}
							</div>
						) : (
							''
						)}

						{currentType?.id == 'orders' ? <Orders /> : <Freelancers />}
					</div>
					<div className={styles.catalog__content__right}>
						<Filters type={currentType.id} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Catalog
