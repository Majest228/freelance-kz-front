import Image from 'next/image'
import styles from './OrderProfile.module.scss'
import customer from '../../../assets/customer.png'
const OrderProfile = () => {
	return (
		<div className={styles.order__profile}>
			<div className={styles.order__profile__user}>
				<Image src={customer} alt='customer' width={100} height={100} />
				<h3 className={styles.order__profile__user__name}>Влад Гонзо</h3>
				<p className={styles.order__profile__user__desc}>
					Web-разработка полного цикла
				</p>
				<p className={styles.order__profile__user__customer}>Заказчик</p>
			</div>

			<div className={styles.order__profile__state}>
				<h3 className={styles.order__profile__state__title}>
					Статистика заказчика
				</h3>
				<div className={styles.order__profile__state__end}>
					<p>Завершенные заказы</p>
					<span>0</span>
				</div>
				<div className={styles.order__profile__state__search}>
					<p>В поиске исполнителя</p>
					<span>2</span>
				</div>
				<div className={styles.order__profile__state__order}>
					<p>Заказы в арбитраже</p>
					<span>0</span>
				</div>
				<div className={styles.order__profile__state__review}>
					<p className={styles.order__profile__state__review__text}>
						Заказы в арбитраже
					</p>
					<div>
						<span className={styles.order__profile__state__review__negative}>
							-0
						</span>
						<span className={styles.order__profile__state__review__slash}>
							/
						</span>
						<span className={styles.order__profile__state__review__positive}>
							+0
						</span>
					</div>
				</div>
				<div className={styles.order__profile__state__reg}>
					<p>Зарегистрирован</p>
					<span>3 мес. назад</span>
				</div>
				<div className={styles.order__profile__state__reg}>
					<p>Был последний раз</p>
					<span>Сегодня</span>
				</div>
				<div className={styles.order__profile__state__verify}>
					<h3>Верификация</h3>
					<p>Пользователь верифицирован по номеру телефона</p>
				</div>
				<div className={styles.order__profile__state__verify}>
					<h3>Контакты заказчика</h3>
					<p>Пользователь не указал никаких контактов</p>
				</div>
			</div>
		</div>
	)
}

export default OrderProfile
