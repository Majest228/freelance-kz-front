import Image from 'next/image'
import styles from '../Home.module.scss'
import flag from '../../../assets/flag.png'
import Link from 'next/link'
import Auth from '@/components/ui/auth/Auth'
const HomeIntro = () => {
	return (
		<div className={styles.home__intro}>
			<div className={styles.home__intro__content}>
				<div className={styles.home__intro__content__left}>
					<h3 className={styles.home__intro__content__left__title}>
						Лучшая фриланс биржа Казахстана
					</h3>
					<p className={styles.home__intro__content__left__description}>
						Разместите свой заказ на бирже или станьте исполнителем
					</p>
					<div className={styles.home__intro__content__left__controlls}>
						<Link
							href={'/orders/create'}
							className={styles.home__intro__content__left__controlls__order}
						>
							Разместить заказ
						</Link>
					</div>
				</div>
				<div className={styles.home__intro__content__right}>
					<Image src={flag} alt='flag' width={591} height={320} />
				</div>
			</div>
		</div>
	)
}

export default HomeIntro
