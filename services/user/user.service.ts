import { axiosWithToken, axiosWithoutToken } from '@/api/api'

export interface IInfo {
	title: string
	description: string
	name: string
	surname: string
	regionId: number
	cityId: number
}

export const UserService = {
	async getFreelancers() {
		const res = await axiosWithoutToken.get('/user/freelancers')
		return res.data
	},
	async getAvatar(avatar_path: string) {
		const res = await axiosWithoutToken.get(`/portfolio/users/${avatar_path}`)
		return res.data
	},
	async getFreelancerById(id: number) {
		const res = await axiosWithoutToken.get(`/user/freelancer/${id}`)
		return res.data
	},
	async getProfile() {
		const res = await axiosWithToken.get('/user/profile')
		return res.data
	},
	async setInfo({
		title,
		description,
		name,
		surname,
		regionId,
		cityId,
	}: IInfo) {
		return await axiosWithToken.put('/user/update', {
			title,
			description,
			name,
			surname,
			regionId,
			cityId,
		})
	},
}
