import Line from '@/components/ui/line/Line'
import styles from './Create.module.scss'
import Link from 'next/link'

const Create = () => {
	return (
		<div className={styles.create}>
			<div className={styles.create__container}>
				<h3 className={styles.create__title}>Выбор типа заказа</h3>
				<Line top={30} bottom={30} />
				<div className={styles.create__content}>
					<div className={styles.create__content__item}>
						<h3>Создать проект - бесплатное размещение</h3>
						<p>
							Проект - это разовая задача, которую выполняет выбранный вами
							фрилансер. Опишите задачу или оставьте ТЗ, для того, чтобы
							фрилансер изучил задачу
						</p>
						<button>
							<Link href={'create/order'}>Создать проект</Link>
						</button>
					</div>
					<div className={styles.create__content__item}>
						<h3>Создать конкурс - бесплатное размещение</h3>
						<p>
							Конкурс - это тот же проект, но он является открытым и вы будете
							выбирать фрилансера, который отправит самый лучший вариант.
						</p>
						<button>
							<Link href={'create/order'}>Создать конкурс</Link>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Create
