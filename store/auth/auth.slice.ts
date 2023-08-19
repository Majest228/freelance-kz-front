import { createSlice } from '@reduxjs/toolkit'
import { login, register } from './auth.action'
import { getStoreLocal } from '@/hooks/useGetStoreLocal'
import { saveToStorage } from '@/hooks/useSaveToStorage'
import Cookies from 'js-cookie'

const initialState = {
	user: getStoreLocal('user'),
	isLoading: false,
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(register.pending, state => {
				state.isLoading = true
			})
			.addCase(register.fulfilled, state => {
				state.isLoading = false
			})
			.addCase(register.rejected, state => {
				state.isLoading = false
				state.user = null
			})
			.addCase(login.pending, state => {
				state.isLoading = true
			})
			.addCase(login.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.user = payload.user
				saveToStorage('user', payload.user)
			})
			.addCase(login.rejected, state => {
				state.isLoading = false
				state.user = null
			})
	},
})

export const authReducer = authSlice.reducer
