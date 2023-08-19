import axios from 'axios'
import { IAuth } from './auth.interface'
import { saveToStorage, saveTokensStorage } from '@/hooks/useSaveToStorage'
import { axiosWithoutToken } from '@/api/api'

export const AuthService = {
	async register(email: string, password: string, login: string, role: number) {
		const res = await axiosWithoutToken.post<IAuth>('/auth/register/', {
			email,
			password,
			login,
			role: role,
		})

		return res
	},
	async login(email: string, password: string) {
		const res = await axiosWithoutToken.post<IAuth>('/auth/login/', {
			email,
			password,
		})
		if (res.data.accessToken) {
			saveTokensStorage(res.data)
		}
		return res
	},
}
