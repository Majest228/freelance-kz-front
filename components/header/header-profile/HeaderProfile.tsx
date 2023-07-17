import { useState } from 'react'
import styles from '../Header.module.scss'
import Link from 'next/link'
import ArrowIco from '@/components/svgs/Arrow'
import user from '../../../assets/user.jpg'
import Image from 'next/image'
const HeaderProfile = () => {
	const [isUser, setIsUser] = useState(false)
	return (
		<>
			{isUser ? (
				<div className={styles.header__content__right__profile}>
					<Link href={'/'}>Личный кабинет</Link>
					<Image src={user} alt='avatar' width={40} height={40} />
					<ArrowIco w={14} h={14} fill={'white'} />
				</div>
			) : (
				<div className={styles.header__content__right__auth}>
					<button className={styles.header__content__right__auth__button}>
						Регистрация
					</button>
					<button className={styles.header__content__right__auth__button}>
						Вход
					</button>
				</div>
			)}
		</>
	)
}

export default HeaderProfile
