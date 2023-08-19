'use client'
import React, { useState } from 'react'
import styles from './Layout.module.scss'
import Line from '@/components/ui/line/Line'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import classNames from 'classnames'

const links = [
	{
		id: 0,
		name: 'Информация о себе',
		link: '/profile/settings/info',
		active: 'info',
	},
	{
		id: 1,
		name: 'Контактные данные',
		link: '/',
		active: 'contact',
	},
	{
		id: 2,
		name: 'Безопасность аккаунта',
		link: '',
		active: 'securite',
	},
	{
		id: 3,
		name: 'Смена пароля',
		link: '/profile/settings/change-pass',
		active: 'change-pass',
	},
]

export default function LayoutProfile({
	children,
}: {
	children: React.ReactNode
}) {
	const pathname = usePathname()
	const newPathname = pathname.split('/')
	console.log('useParams', newPathname[newPathname.length - 1])
	const [active, setActive] = useState(newPathname[newPathname.length - 1])
	return (
		<div className={styles.layout}>
			<div className={styles.layout__container}>
				<h3 className={styles.layout__title}>Информация о себе</h3>
				<Line top={48} bottom={37}></Line>
				<div className={styles.layout__content}>
					<div className={styles.layout__content__left}>
						{links.map(link => (
							<Link
								onClick={() => setActive(link.active)}
								className={classNames(
									active == link.active
										? styles.layout__content__left__active
										: styles.layout__content__left__link
								)}
								key={link.id}
								href={link.link}
							>
								{link.name}
							</Link>
						))}
					</div>
					{children}
				</div>
			</div>
		</div>
	)
}
