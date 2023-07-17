import ArrowIco from '@/components/svgs/Arrow'
import styles from '../Header.module.scss'

const HeaderLang = () => {
	return (
		<button className={styles.header__content__right__lang}>
			<span>Рус</span>
			<button className={styles.header__content__right__lang__button}>
				<ArrowIco w={14} h={14} fill={'#ffffff'} />
			</button>
		</button>
	)
}

export default HeaderLang
