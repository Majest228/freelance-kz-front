import Image from 'next/image'
import styles from '../../../Home.module.scss'
import photo from '../../../../../assets/photo.png'
import StarIco from '@/components/svgs/Star'
import HomeBestItemHeader from './home-best-item-header/HomeBestItemHeader'
const HomeBestItem = () => {
	return (
		<div className={styles.home__best__list__item}>
			<HomeBestItemHeader />
			<p className={styles.home__best__list__item__description}>
				Помогу сделать посетителей сайта покупателями. WhatsApp, Telegram:
				+79326058857
			</p>
		</div>
	)
}

export default HomeBestItem
