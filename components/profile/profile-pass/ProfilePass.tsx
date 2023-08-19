import React from 'react'
import styles from './ProfilePass.module.scss'

const ProfilePass = () => {
	return (
		<div className={styles.profile__pass}>
			<div className={styles.profile__pass__content}>
				<div className={styles.profile__pass__content__current}>
					<label htmlFor=''>Текущий пароль</label>
					<input type='password' />
				</div>
				<div className={styles.profile__pass__content__new}>
					<div className={styles.profile__pass__content__new__item}>
						<label htmlFor=''>Новый пароль</label>
						<input type='password' />
					</div>
					<div className={styles.profile__pass__content__new__item}>
						<label htmlFor=''>Повтор нового пароля</label>
						<input type='password' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProfilePass
