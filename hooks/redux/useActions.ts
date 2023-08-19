import { useMemo } from 'react'
import { useAppDispatch } from './hooks'
import { bindActionCreators } from '@reduxjs/toolkit'
import { rootActions } from '@/store/roote.action'

export const useActions = () => {
	const dispatch = useAppDispatch()

	return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
