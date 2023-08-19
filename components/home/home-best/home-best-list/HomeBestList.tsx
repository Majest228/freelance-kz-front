'use client'
import { UserService } from '@/services/user/user.service'
import styles from '../../Home.module.scss'
import HomeBestItem from './home-best-item/HomeBestItem'
import { useQuery } from 'react-query'

export interface IFreelancer {
	id: number
	email: string
	login: string
	phone: number
	date_born: number
	avatarPath: string
	name: string
	surname: string
	title: string
	smallDescription: string
	description: string
	cv: string
	rating: number
}

const HomeBestList = () => {
	const {
		data: freelancers,
		isError,
		isLoading,
	} = useQuery('freelancers', UserService.getFreelancers)
	console.log('freelancers', freelancers)
	return (
		<div className={styles.home__best__list}>
			{isLoading
				? []
				: freelancers.map((freelancer: IFreelancer) => (
						<HomeBestItem
							id={freelancer.id}
							avatarPath={freelancer.avatarPath}
							cv={freelancer.cv}
							date_born={freelancer.date_born}
							description={freelancer.description}
							email={freelancer.email}
							login={freelancer.login}
							phone={freelancer.phone}
							title={freelancer.title}
							name={freelancer.name}
							surname={freelancer.surname}
							rating={freelancer.rating}
							smallDescription={freelancer.smallDescription}
						/>
				  ))}
		</div>
	)
}

export default HomeBestList
