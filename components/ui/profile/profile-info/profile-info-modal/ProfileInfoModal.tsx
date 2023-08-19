import React, { useEffect, useState } from 'react'
import styles from './ProfileInfoModal.module.scss'
import Line from '@/components/ui/line/Line'
import { useMutation, useQuery } from 'react-query'
import { CitiesService } from '@/services/cities/cities.service'
import Close from '@/components/svgs/Close'
import { UserService } from '@/services/user/user.service'
import ImageComponent from '@/components/ui/image/ImageComponent'
import { ProfessionService } from '@/services/profession/profession.service'
import ImageDefault from '@/components/ui/image/ImageDefault'
const ProfileInfoModal = ({ setIsModal, isModal, profile }) => {
	const [region_id, setRegion_id] = useState(1)
	const [data, setData] = useState({
		name: '',
		surname: '',
		regionId: 0,
		cityId: 0,
		professionId: 0,
	})

	useEffect(() => console.log('prof', data), [data])
	const { data: regions, isLoading: isLoadingRegions } = useQuery(
		'region',
		() => CitiesService.getRegions()
	)

	const { data: cities, isLoading: isLoadingCities } = useQuery(
		['city', region_id],
		() => CitiesService.getCities(region_id)
	)

	const { data: profession, isLoading: isLoadingProfession } = useQuery(
		'profession',
		() => ProfessionService.getAll()
	)

	const mutationProfession = useMutation(profession =>
		ProfessionService.setProfession(profession)
	)
	const mutation = useMutation(newInfo => UserService.setInfo(newInfo))
	return (
		<div className={styles.profile__modal}>
			<button
				onClick={() => setIsModal(false)}
				className={styles.profile__modal__close}
			>
				<Close />
			</button>
			<h3 className={styles.profile__modal__content__title}>
				Редактировать профиль
			</h3>
			<div className={styles.profile__modal__content}>
				<Line top={30} bottom={30} />
				<div className={styles.profile__modal__content__personal}>
					{profile?.avatarPath == '' ? (
						<ImageDefault
							borderRadius={21}
							fz={128}
							width={200}
							height={200}
							text={profile.login[0]?.toUpperCase()}
						/>
					) : (
						<ImageComponent
							borderRadius={21}
							height={200}
							width={200}
							image={`http://localhost:7777/api/portfolio/users/${profile?.avatarPath}`}
						/>
					)}

					<div className={styles.profile__modal__content__personal__info}>
						<div
							className={styles.profile__modal__content__personal__info__item}
						>
							<label htmlFor=''>Имя</label>
							<input
								placeholder='Дмитрий'
								onChange={e => setData({ ...data, name: e.target.value })}
								type='text'
							/>
						</div>
						<div
							className={styles.profile__modal__content__personal__info__item}
						>
							<label htmlFor=''>Фамилия</label>
							<input
								placeholder='Моисеенко'
								onChange={e => setData({ ...data, surname: e.target.value })}
								type='text'
							/>
						</div>
					</div>
				</div>
				<Line top={30} bottom={30} />
				<div className={styles.profile__modal__content__cities}>
					<div className={styles.profile__modal__content__cities__item}>
						<label htmlFor=''>Область</label>
						<select
							onChange={e => {
								setRegion_id(+e.target.value)
								setData({ ...data, regionId: +e.target.value })
							}}
						>
							{regions?.map(region => (
								<option key={region.id} value={region.id}>
									{region.name}
								</option>
							))}
						</select>
					</div>
					<div className={styles.profile__modal__content__cities__item}>
						<label htmlFor=''>Город</label>
						<select
							onChange={e => {
								setData({ ...data, cityId: +e.target.value })
							}}
						>
							{isLoadingCities
								? []
								: cities?.map(city => (
										<option key={city.id} value={city.id}>
											{city.name}
										</option>
								  ))}
						</select>
					</div>
				</div>
				<Line top={30} bottom={30} />
				<div className={styles.profile__modal__content__profession}>
					<label htmlFor=''>Профессия</label>
					<select
						onChange={e => {
							setData({ ...data, professionId: +e.target.value })
						}}
					>
						{profession?.map(p => (
							<option value={p.id}>{p.name}</option>
						))}
					</select>
				</div>
				<Line top={30} bottom={30} />
				<button
					onClick={() => {
						mutation.mutate({
							cityId: data.cityId,
							name: data.name,
							surname: data.surname,
						})
						mutationProfession.mutate(data.professionId)
					}}
					className={styles.profile__modal__btn}
				>
					Сохранить изменения
				</button>
			</div>
		</div>
	)
}

export default ProfileInfoModal
