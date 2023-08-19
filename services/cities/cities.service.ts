import { axiosWithoutToken } from '@/api/api'
import axios from 'axios'

export const CitiesService = {
	async getRegions() {
		const res = await axiosWithoutToken.get('/city/get-regions')
		return res.data
	},
	async getCities(id: number) {
		const res = await axiosWithoutToken.get(`/city/get-cities/${id}`)
		return res.data
	},
	async getById(id: number) {
		const res = await axiosWithoutToken.get(`/city/get-by-id/${id}`)
		return res.data
	},
}
