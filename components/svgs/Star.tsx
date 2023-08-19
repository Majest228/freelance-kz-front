import React from 'react'

const StarIco = ({ w = '13', h = '13', fill = '#D1D1D1' }) => {
	return (
		<svg
			width={w}
			height={h}
			viewBox='0 0 13 13'
			fill={fill}
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M6.5 10.7792L2.48258 13L3.25 8.29618L0 4.96525L4.49129 4.27949L6.5 0L8.50871 4.27949L13 4.96525L9.75 8.29618L10.5174 13L6.5 10.7792Z'
				fill={fill}
			/>
		</svg>
	)
}

export default StarIco
