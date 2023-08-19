'use client'
import Link from 'next/link'
import styles from './Auth.module.scss'
import { useActions } from '@/hooks/redux/useActions'
import { useState } from 'react'
import Close from '@/components/svgs/Close'
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form'
import { IAuthForm } from './auth.interface'
import { useAuth } from '@/hooks/redux/useAuth'

const Auth = ({ type }) => {
	const [stateType, setStateType] = useState<'login' | 'register'>(type)
	const { user } = useAuth()
	const { register: registerFunc, login } = useActions()
	console.log('user', user)
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IAuthForm>({ defaultValues: {}, mode: 'onChange' })
	const [isShow, setIsShow] = useState(false)

	const submit: SubmitHandler<IAuthForm> = data => {
		if (stateType == 'register') {
			registerFunc({
				email: data.email,
				login: data.login,
				password: data.password,
			})
		} else {
			login({
				email: data.email,
				login: data.login,
				password: data.password,
			})
		}
	}

	const changeTypesBtn = (type: string) => {
		switch (type) {
			case 'login':
				return (
					<button
						className={styles.login}
						onClick={() => {
							setIsShow(!isShow)
						}}
					>
						Войти
					</button>
				)
			case 'register':
				return (
					<button
						className={styles.reg}
						onClick={() => {
							setIsShow(!isShow)
						}}
					>
						Регистрация
					</button>
				)
			default:
				break
		}
	}

	const changeTypesContent = (type: string) => {
		switch (type) {
			case 'login':
				return (
					<form onSubmit={handleSubmit(submit)}>
						<button
							onClick={() => setIsShow(false)}
							className={styles.auth__close}
						>
							<Close />
						</button>
						<h3 className={styles.auth__content__title}>Авторизация</h3>
						<div className={styles.auth__content__block}>
							<div
								className={
									errors.email
										? styles.auth__content__block__error
										: styles.auth__content__block__item
								}
							>
								<input
									{...register('email', { required: true })}
									type='email'
									placeholder='antonanton@gmail.com'
								/>
								<label htmlFor=''>Электронная почта *</label>
								{errors.email ? (
									<p className={styles.auth__content__block__item__error}>
										Поле должно быть обязательным
									</p>
								) : (
									''
								)}
							</div>
							<div className={styles.auth__content__block__item}>
								<input
									{...register('password', { required: true })}
									type='password'
									placeholder='*********'
								/>
								<label htmlFor=''>Пароль *</label>
							</div>
							<button type='submit' className={styles.auth__content__click}>
								Войти
							</button>
							<p className={styles.auth__content__link}>
								<button onClick={() => setStateType('register')}>
									Зарегистрироваться
								</button>
							</p>
						</div>
					</form>
				)
			case 'register':
				return (
					<form onSubmit={handleSubmit(submit)}>
						<button
							onClick={() => setIsShow(false)}
							className={styles.auth__close}
						>
							<Close />
						</button>
						<h3 className={styles.auth__content__title}>Регистрация</h3>
						<div className={styles.auth__content__block}>
							<div
								className={
									errors.email
										? styles.auth__content__block__error
										: styles.auth__content__block__item
								}
							>
								<input
									type='email'
									{...register('email', { required: true })}
									placeholder='antonanton@gmail.com'
								/>
								<label htmlFor=''>Электронная почта *</label>
								{errors.email ? (
									<p className={styles.auth__content__block__item__error}>
										Поле должно быть обязательным
									</p>
								) : (
									''
								)}
							</div>
							<div
								className={
									errors.login
										? styles.auth__content__block__error
										: styles.auth__content__block__item
								}
							>
								<input
									{...register('login', { required: true })}
									type='text'
									placeholder='test'
								/>
								<label htmlFor=''>Электронная почта *</label>
								{errors.login ? (
									<p className={styles.auth__content__block__item__error}>
										Поле должно быть обязательным
									</p>
								) : (
									''
								)}
							</div>
							<div className={styles.auth__content__block__item}>
								<input
									{...register('password')}
									type='password'
									placeholder='*********'
								/>
								<label htmlFor=''>Пароль *</label>
							</div>
							<button type='submit' className={styles.auth__content__click}>
								Зарегистрироваться
							</button>
							<p className={styles.auth__content__link}>
								<button onClick={() => setStateType('login')}>Войти </button>в
								существующий профиль
							</p>
						</div>
					</form>
				)
			default:
				break
		}
	}

	return (
		<div className={styles.auth}>
			{changeTypesBtn(stateType)}

			{isShow && (
				<div className={styles.auth__wrapper}>
					<div className={styles.auth__content}>
						{changeTypesContent(stateType)}
					</div>
				</div>
			)}
			{isShow && <div className={styles.auth__overlay}></div>}
		</div>
	)
}

export default Auth
