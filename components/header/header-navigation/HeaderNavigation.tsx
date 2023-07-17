import Link from 'next/link'
import styles from '../Header.module.scss'
const HeaderNavigation = () => {
	return (
		<nav className={styles.header__content__left__nav}>
			<ul className={styles.header__content__left__nav__list}>
				<li>
					<Link href='/orders'>Заказы</Link>
				</li>
				<li>
					<Link href='/freelancers'>Фрилансеры</Link>
				</li>
				<li>
					<Link href='/'>Конкурсы</Link>
				</li>
				<li>
					<Link href='/'>Форум</Link>
				</li>
				<li>
					<Link href='/'>Помощь</Link>
				</li>
			</ul>
		</nav>
	)
}

export default HeaderNavigation
