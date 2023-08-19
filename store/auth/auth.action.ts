import { IAuth, IAuthData } from '@/services/auth/auth.interface'
import { AuthService } from '@/services/auth/auth.service'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const register: any = createAsyncThunk<IAuthData, IAuth>(
	'auth/register',
	async ({ email, password, login, role }) => {
		try {
			const response = await AuthService.register(email, password, login, role)
			return response.data
		} catch (e) {
			console.error(e)
		}
	}
)

export const login: any = createAsyncThunk<IAuthData, IAuth>(
	'auth/login',
	async ({ email, password }) => {
		try {
			const response = await AuthService.login(email, password)
			return response.data
		} catch (e) {
			console.error(e)
		}
	}
)
