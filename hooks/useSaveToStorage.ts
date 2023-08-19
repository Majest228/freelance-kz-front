import Cookies from 'js-cookie'

export const saveTokensStorage = data => {
	Cookies.set('accessToken', data.accessToken, { expires: 1 })
	Cookies.set('refreshToken', data.refreshToken, { expires: 1 })
}

export const saveToStorage = (name, data) => {
	localStorage.setItem(`${name}`, JSON.stringify(data))
}
