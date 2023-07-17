import Link from 'next/link'
import styles from './Footer.module.scss'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer__container}>
				<div className={styles.footer__navigations}>
					<ul className={styles.footer__navigations__list}>
						<h3 className={styles.footer__navigations__list__title}>
							О сервисе
						</h3>
						<li className={styles.footer__navigations__list__item}>
							<Link href={'/'}>О компании</Link>
						</li>
						<li className={styles.footer__navigations__list__item}>
							<Link href={'/'}>Контакты</Link>
						</li>
						<li className={styles.footer__navigations__list__item}>
							<Link href={'/'}>Отзывы</Link>
						</li>
					</ul>
					<ul className={styles.footer__navigations__list}>
						<h3 className={styles.footer__navigations__list__title}>
							Пользователям
						</h3>
						<li className={styles.footer__navigations__list__item}>
							<Link href={'/'}>Задачи и теги</Link>
						</li>
						<li className={styles.footer__navigations__list__item}>
							<Link href={'/'}>Фриланс заказы</Link>
						</li>
						<li className={styles.footer__navigations__list__item}>
							<Link href={'/'}>Партнёрская программа</Link>
						</li>
					</ul>
					<ul className={styles.footer__navigations__list}>
						<h3 className={styles.footer__navigations__list__title}>Помощь</h3>
						<li className={styles.footer__navigations__list__item}>
							<Link href={'/'}>Помощь</Link>
						</li>
						<li className={styles.footer__navigations__list__item}>
							<Link href={'/'}>Правила сервиса</Link>
						</li>
						<li className={styles.footer__navigations__list__item}>
							<Link href={'/'}>Служба поддержки</Link>
						</li>
					</ul>
					<ul className={styles.footer__navigations__list}>
						<h3 className={styles.footer__navigations__list__title}>
							support@kazfl.kz
						</h3>
						<li className={styles.footer__navigations__list__item}>
							<Link href={'/'}>Ежедневно с 8:00 до 22:00</Link>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	)
}

export default Footer
