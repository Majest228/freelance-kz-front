import { useState } from 'react'
import styles from '../Header.module.scss'
import Link from 'next/link'
import ArrowIco from '@/components/svgs/Arrow'
import user from '../../../assets/user.jpg'
import Image from 'next/image'
import Auth from '../../../components/ui/auth/Auth'
import { useAuth } from '@/hooks/redux/useAuth'
import { useQuery } from 'react-query'
import { UserService } from '@/services/user/user.service'
import ImageComponent from '@/components/ui/image/ImageComponent'
import ImageDefault from '@/components/ui/image/ImageDefault'
const HeaderProfile = ({ isOpened, setIsOpened }) => {
	const { data: profile, isLoading: isLoadingProfile } = useQuery(
		'profile',
		() => UserService.getProfile()
	)
	const { user: isUser } = useAuth()
	return (
		<>
			{isUser ? (
				<div className={styles.header__content__right__profile}>
					<Link href={'/profile'}>Личный кабинет</Link>
					{profile?.avatarPath == '' ? (
						<ImageDefault
							borderRadius={50}
							fz={24}
							width={40}
							height={40}
							text={profile.login[0]?.toUpperCase()}
						/>
					) : (
						<ImageComponent
							alt={'avatar'}
							width={40}
							height={40}
							borderRadius={50}
							image={`http://localhost:7777/api/portfolio/users/${profile?.avatarPath}`}
						/>
					)}

					<ArrowIco w={14} h={14} fill={'white'} />
				</div>
			) : (
				<div className={styles.header__content__right__auth}>
					<Auth type='register' />
					<Auth type='login' />
				</div>
			)}
		</>
	)
}

export default HeaderProfile
