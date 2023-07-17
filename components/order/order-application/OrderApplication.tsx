import Image from 'next/image'
import styles from './OrderApplication.module.scss'
import application from '../../../assets/application.png'

const OrderApplication = () => {
	return (
		<div className={styles.order__application}>
			<h3 className={styles.order__application__title}>Приложения</h3>
			<div className={styles.order__application__items}>
				<Image alt='app' src={application} width={140} height={140} />
				<Image alt='app' src={application} width={140} height={140} />
				<Image alt='app' src={application} width={140} height={140} />
			</div>
		</div>
	)
}

export default OrderApplication
