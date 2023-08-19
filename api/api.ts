import axios from 'axios'
import Cookies from 'js-cookie'
export const URL = 'http://localhost:7777/api'

const axiosWithToken = axios.create({
	baseURL: URL,
	headers: {
		Authorization: `Bearer ${Cookies.get('accessToken')}`,
	},
})

const axiosWithoutToken = axios.create({
	baseURL: URL,
})

export { axiosWithToken, axiosWithoutToken }
