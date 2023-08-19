import { axiosWithToken, axiosWithoutToken } from '@/api/api'
import axios from 'axios'

export const ProfessionService = {
	async getAll() {
		const res = await axiosWithoutToken.get('/profession/all')
		return res.data
	},
	async setProfession(professionId: number) {
		const res = await axiosWithToken.post(`/profession/create/${professionId}`)
		return res.data
	},
}
