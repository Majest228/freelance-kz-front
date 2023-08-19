'use client'
import React, { useState } from 'react'
import styles from './Freelancer.module.scss'
import Link from 'next/link'
import ImageComponent from '../ui/image/ImageComponent'
import ImageDefault from '../ui/image/ImageDefault'
import { useParams, usePathname } from 'next/navigation'
import { useQuery } from 'react-query'
import { UserService } from '@/services/user/user.service'
import Line from '../ui/line/Line'
import FreelancerInfo from './freelancer-info/FreelancerInfo'
import StarIco from '../svgs/Star'
import port from '../../assets/portfolio.png'
import Image from 'next/image'
const Freelancer = () => {
	const pathname = usePathname()
	const params = useParams()
	const parts = pathname.split('/')
	const singlePathname: string = parts[1]
	const [type, setType] = useState(singlePathname)
	console.log('p', params.slug)

	const {
		data: freelancer,
		isLoading: isLoadingFreelancer,
		isError,
	} = useQuery(['freelancer', +params.slug], () =>
		UserService.getFreelancerById(+params.slug)
	)
	return (
		<div className={styles.freelancer}>
			<div className={styles.freelancer__container}>
				<div className={styles.freelancer__header}>
					<div className={styles.freelancer__header__left}>
						{freelancer?.avatarPath == '' ? (
							<ImageDefault
								borderRadius={21}
								text={
									isLoadingFreelancer ? '' : freelancer?.login[0].toUpperCase()
								}
							/>
						) : (
							<ImageComponent
								alt='freelancer'
								borderRadius={21}
								image={`http://localhost:7777/api/portfolio/users/${freelancer?.avatarPath}`}
							/>
						)}
						<FreelancerInfo freelancer={freelancer} />
						{/* <freelancerInfo freelancer={freelancer} /> */}
					</div>
					<div className={styles.freelancer__header__right}>
						<>
							<button className={styles.freelancer__header__right__offer}>
								Предложить заказ
							</button>
							<button className={styles.freelancer__header__right__customer}>
								Профиль заказчика
							</button>
						</>
					</div>
				</div>
				<Line top={40} />
				<div className={styles.freelancer__content}>
					<div className={styles.freelancer__content__left}>
						<h3 className={styles.freelancer__content__left__title}>
							{freelancer?.title == '' ? (
								<h4>Пользователь не ввел заголовок</h4>
							) : (
								freelancer?.title
							)}
						</h3>
						<p
							className={styles.freelancer__content__left__description}
							dangerouslySetInnerHTML={{
								__html: freelancer?.description,
							}}
						></p>
						<Line bottom={33} top={40} />
						<div className={styles.freelancer__content__left__portfolio}>
							<div
								className={styles.freelancer__content__left__portfolio__title}
							>
								<h3>Работы в портфолио</h3>
								<Link href={'/'}>Смотреть все работы</Link>
							</div>
							<Line bottom={33} top={40} />
							<div
								className={styles.freelancer__content__left__portfolio__items}
							>
								<Image src={port} alt='port' width={276} height={180} />
								<Image src={port} alt='port' width={276} height={180} />
								<Image src={port} alt='port' width={276} height={180} />
								<Image src={port} alt='port' width={276} height={180} />
								<Image src={port} alt='port' width={276} height={180} />
								<Image src={port} alt='port' width={276} height={180} />
							</div>
						</div>
						<Line bottom={33} top={40} />
						<div className={styles.freelancer__content__left__reviews}>
							<div
								className={styles.freelancer__content__left__reviews__header}
							>
								<h3>Последние отзывы</h3>
								<Link href={'/'}>Читать все отзывы</Link>
							</div>
							<Line bottom={33} top={40} />
							<div className={styles.freelancer__content__left__reviews__item}>
								<Link
									href={'/'}
									className={
										styles.freelancer__content__left__reviews__item__title
									}
								>
									Разработка фирменного стиля для свечей ручной работы
								</Link>
								<div
									className={
										styles.freelancer__content__left__reviews__item__content
									}
								>
									<div
										className={
											styles.freelancer__content__left__reviews__item__content__rating
										}
									>
										<div
											className={
												styles.freelancer__content__left__reviews__item__content__rating__stars
											}
										>
											<StarIco w='25' h='25' />
											<StarIco w='25' h='25' />
											<StarIco w='25' h='25' />
											<StarIco w='25' h='25' />
											<StarIco w='25' h='25' />
										</div>
										<h3
											className={
												styles.freelancer__content__left__reviews__item__content__rating__name
											}
										>
											{/* {freelancer?.name} {freelancer?.surname} */}
											Имя
										</h3>
										<span
											className={
												styles.freelancer__content__left__reviews__item__content__rating__date
											}
										>
											11 июня 2021
										</span>
									</div>
									<div
										className={
											styles.freelancer__content__left__reviews__item__content__plus
										}
									>
										<h3>Плюсы</h3>
										<p>Компактный и мощный</p>
									</div>
									<div
										className={
											styles.freelancer__content__left__reviews__item__content__plus
										}
									>
										<h3>Минусы</h3>
										<p>Нет</p>
									</div>
									<div
										className={
											styles.freelancer__content__left__reviews__item__content__plus
										}
									>
										<h3>Комментарий</h3>
										<p>
											Отлично взбивает и измельчает замороженные ягоды , яблоки
											, морковь. Мы делаем смузи чаще , благодаря этому
											блендеру. Заряжается быстро и зарядки хватает надолго. У
											данной модели защищён вход заряда , поэтому вода туда не
											попадает при мытье. Пластик высокого качества , запаха
											нет. Летом будем брать с собой в машину , так как usb
											заряд. При выборе техники , всегда выигрывает фирма
											kitfort, так как цена-качество
										</p>
									</div>
								</div>
							</div>
							{/* <Line top={40} /> */}
						</div>
					</div>
					<div className={styles.freelancer__content__right}>
						<div className={styles.freelancer__content__right__content}>
							<h3 className={styles.freelancer__content__right__content__title}>
								Информация о фрилансере
							</h3>
							<div className={styles.freelancer__content__right__content__link}>
								<Link href={'/'}>Резюме</Link>
							</div>
							<div className={styles.freelancer__content__right__content__link}>
								<Link href={'/'}>Примеры работ</Link>
								<span>13</span>
							</div>
							<div className={styles.freelancer__content__right__content__link}>
								<Link href={'/'}>Отзывы заказчиков</Link>
								<span>133</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Freelancer
