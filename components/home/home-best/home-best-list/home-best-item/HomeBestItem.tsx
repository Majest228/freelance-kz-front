import Image from 'next/image'
import styles from '../../../Home.module.scss'
import photo from '../../../../../assets/photo.png'
import StarIco from '@/components/svgs/Star'
import HomeBestItemHeader from './home-best-item-header/HomeBestItemHeader'
import { IFreelancer } from '../HomeBestList'
const HomeBestItem = ({
	id,
	avatarPath,
	cv,
	date_born,
	description,
	email,
	login,
	name,
	phone,
	rating,
	smallDescription,
	surname,
	title,
}: IFreelancer) => {
	return (
		<div className={styles.home__best__list__item}>
			<HomeBestItemHeader
				login={login}
				id={id}
				name={name}
				surname={surname}
				avatarPath={avatarPath}
			/>
			<p className={styles.home__best__list__item__description}>
				{smallDescription}
			</p>
		</div>
	)
}

export default HomeBestItem
