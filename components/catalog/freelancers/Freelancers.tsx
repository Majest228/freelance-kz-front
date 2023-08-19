import React from 'react'
import styles from './Freelancers.module.scss'
import FleelancersItem from './FleelancersItem/FleelancersItem'
import { useQuery } from 'react-query'
import { UserService } from '@/services/user/user.service'

const Freelancers = () => {
	const { data: freelancers, isLoading } = useQuery('freelancers', () =>
		UserService.getFreelancers()
	)
	return (
		<div className={styles.freelancers}>
			<div className={styles.freelancers__items}>
				{freelancers?.map(freelancer => (
					<FleelancersItem key={freelancer?.id} freelancer={freelancer} />
				))}
			</div>
		</div>
	)
}

export default Freelancers
