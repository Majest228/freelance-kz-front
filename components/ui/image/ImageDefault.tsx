import React from 'react'
import styles from './ImageDefault.module.scss'

const ImageDefault = ({
	text,
	borderRadius,
	alt,
	width = 225,
	height = 225,
	fz = 124,
}) => {
	return (
		<div
			className={styles.image}
			// style={{
			// 	background: 'rgb(101, 170, 221)',
			// 	width: '225px',
			// 	height: '225px',
			// borderRadius: '21px',
			// position: 'relative',
			// }}
			style={{
				width: `${width}px`,
				height: `${height}px`,
				background: 'rgb(101, 170, 221)',
				borderRadius: `${borderRadius}px`,
				objectFit: 'cover',
				position: 'relative',
			}}
		>
			<p
				className={styles.image__text}
				style={{
					fontSize: `${fz}px`,
					position: 'absolute',
					top: '50%',
					left: '50%',
				}}
			>
				{text}
			</p>
		</div>
	)
}

export default ImageDefault
