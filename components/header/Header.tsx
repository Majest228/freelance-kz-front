'use client'
import Link from 'next/link'
import styles from './Header.module.scss'
import HeaderNavigation from './header-navigation/HeaderNavigation'
import { Open_Sans } from 'next/font/google'
import HeaderLang from './header-lang/HeaderLang'
import HeaderProfile from './header-profile/HeaderProfile'
const openSans = Open_Sans({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700', '800'],
})

const Header = () => {
	return (
		<header style={openSans.style} className={styles.header}>
			<div className={styles.header__container}>
				<div className={styles.header__content}>
					<div className={styles.header__content__left}>
						<Link className={styles.header__content__left__title} href='/'>
							Kazfl
						</Link>
						<HeaderNavigation />
					</div>
					<div className={styles.header__content__right}>
						<HeaderProfile />
						<HeaderLang />
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
