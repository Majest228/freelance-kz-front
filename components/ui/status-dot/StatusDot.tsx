import React from 'react'
import { IStatus } from './status.interface'

const StatusDot = ({ background }: IStatus) => {
	return (
		<div
			style={{
				background: background,
				width: '10px',
				height: '10px',
				borderRadius: '29px',
			}}
		></div>
	)
}

export default StatusDot
