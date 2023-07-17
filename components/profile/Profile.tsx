import Image from 'next/image'
import styles from './Profile.module.scss'
import user from '../../assets/user.png'
import StatusDot from '../ui/status-dot/StatusDot'
import country from '../../assets/country.png'
import HomeIco from '../svgs/Home'
import StarIco from '../svgs/Star'
import Line from '../ui/line/Line'
import Link from 'next/link'
import port from '../../assets/portfolio.png'
const Profile = () => {
	return (
		<div className={styles.profile}>
			<div className={styles.profile__container}>
				<div className={styles.profile__header}>
					<div className={styles.profile__header__left}>
						<div
							style={{ width: '225px', height: '225px' }}
							className={styles.profile__header__left__images}
						>
							<Image
								src={user}
								alt='user'
								width={0}
								height={0}
								style={{
									borderRadius: '21px',
									display: 'block',
									backgroundSize: 'cover',
									backgroundPosition: 'center',
									width: '100%',
									height: '100%',
								}}
							/>
						</div>

						<div className={styles.profile__header__left__info}>
							<h3 className={styles.profile__header__left__info__name}>
								Дмитрий Моисеенко
							</h3>
							<p className={styles.profile__header__left__info__profession}>
								Frontend developer
							</p>
							<div className={styles.profile__header__left__info__status}>
								<div
									className={styles.profile__header__left__info__status__show}
								>
									<StatusDot background='#D1D1D1' />
									<p
										className={
											styles.profile__header__left__info__status__show__text
										}
									>
										Был онлайн 14 часов назад
									</p>
								</div>
								<div
									className={
										styles.profile__header__left__info__status__location
									}
								>
									<Image src={country} alt='country' width={18} height={13} />
									<p>Варшава, Польша</p>
								</div>
							</div>
							<div className={styles.profile__header__left__info__date}>
								<div className={styles.profile__header__left__info__date__reg}>
									<HomeIco />
									<p>2 года на сервисе</p>
								</div>
								<div
									className={styles.profile__header__left__info__date__review}
								>
									<div
										className={
											styles.profile__header__left__info__date__review__stars
										}
									>
										<StarIco />
										<StarIco />
										<StarIco />
										<StarIco />
										<StarIco />
									</div>
									<p>133 отзыва</p>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.profile__header__right}>
						<button className={styles.profile__header__right__offer}>
							Предложить заказ
						</button>
						<button className={styles.profile__header__right__customer}>
							Профиль заказчика
						</button>
					</div>
				</div>
				<Line bottom={33} top={40} />
				<div className={styles.profile__content}>
					<div className={styles.profile__content__left}>
						<p className={styles.profile__content__left__description}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
							consectetur iure alias delectus in, ut dolore suscipit et.
							Cupiditate, libero! Fugit impedit ab ullam omnis dolor provident
							beatae sint cumque, ipsum voluptatum, dolores ipsa modi eius
							voluptatem doloribus vel soluta in esse dolorum nobis. Dolorem
							dignissimos ducimus assumenda aliquid eum.
						</p>
						<Line bottom={33} top={40} />
						<div className={styles.profile__content__left__portfolio}>
							<div className={styles.profile__content__left__portfolio__title}>
								<h3>Работы в портфолио</h3>
								<Link href={'/'}>Смотреть все работы</Link>
							</div>
							<Line bottom={33} top={40} />
							<div className={styles.profile__content__left__portfolio__items}>
								<Image src={port} alt='port' width={276} height={180} />
								<Image src={port} alt='port' width={276} height={180} />
								<Image src={port} alt='port' width={276} height={180} />
								<Image src={port} alt='port' width={276} height={180} />
								<Image src={port} alt='port' width={276} height={180} />
								<Image src={port} alt='port' width={276} height={180} />
							</div>
						</div>
						<Line bottom={33} top={40} />
					</div>
					<div className={styles.profile__content__right}>123</div>
				</div>
			</div>
		</div>
		// <div className={styles.profile}>
		// 	<div className={styles.profile__container}>
		// 		<div className={styles.profile__header}>
		// <div className={styles.profile__header__left}>
		// 	<div
		// 		style={{ width: '225px', height: '225px' }}
		// 		className={styles.profile__header__left__images}
		// 	>
		// 		<Image
		// 			src={user}
		// 			alt='user'
		// 			width={0}
		// 			height={0}
		// 			style={{
		// 				borderRadius: '21px',
		// 				display: 'block',
		// 				backgroundSize: 'cover',
		// 				backgroundPosition: 'center',
		// 				width: '100%',
		// 				height: '100%',
		// 			}}
		// 		/>
		// 	</div>

		// 	<div className={styles.profile__header__left__info}>
		// 		<h3 className={styles.profile__header__left__info__name}>
		// 			Дмитрий Моисеенко
		// 		</h3>
		// 		<p className={styles.profile__header__left__info__profession}>
		// 			Frontend developer
		// 		</p>
		// 		<div className={styles.profile__header__left__info__status}>
		// 			<div
		// 				className={styles.profile__header__left__info__status__show}
		// 			>
		// 				<StatusDot background='#D1D1D1' />
		// 				<p
		// 					className={
		// 						styles.profile__header__left__info__status__show__text
		// 					}
		// 				>
		// 					Был онлайн 14 часов назад
		// 				</p>
		// 			</div>
		// 			<div
		// 				className={
		// 					styles.profile__header__left__info__status__location
		// 				}
		// 			>
		// 				<Image src={country} alt='country' width={18} height={13} />
		// 				<p>Варшава, Польша</p>
		// 			</div>
		// 		</div>
		// 		<div className={styles.profile__header__left__info__date}>
		// 			<div className={styles.profile__header__left__info__date__reg}>
		// 				<HomeIco />
		// 				<p>2 года на сервисе</p>
		// 			</div>
		// 			<div
		// 				className={styles.profile__header__left__info__date__review}
		// 			>
		// 				<div
		// 					className={
		// 						styles.profile__header__left__info__date__review__stars
		// 					}
		// 				>
		// 					<StarIco />
		// 					<StarIco />
		// 					<StarIco />
		// 					<StarIco />
		// 					<StarIco />
		// 				</div>
		// 				<p>133 отзыва</p>
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>
		// <div className={styles.profile__header__right}>
		// 	<button className={styles.profile__header__right__offer}>
		// 		Предложить заказ
		// 	</button>
		// 				<button className={styles.profile__header__right__customer}>
		// <div className={styles.profile__content__left}>
		// 				<p className={styles.profile__content__left__description}></p>
		// 			</div>
		// 			<div className={styles.profile__content__right}></div>
		// 		</div>
		// 	</div>
		// 	</div>
		// 		</div>
	)
}

export default Profile
