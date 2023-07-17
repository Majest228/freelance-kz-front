import styles from './Line.module.scss'
import { ILine } from './line.interface'

const Line = ({ top = 0, bottom = 0 }: ILine) => {
	return (
		<div
			style={{ marginTop: `${top}px`, marginBottom: `${bottom}px` }}
			className={styles.line}
		></div>
	)
}

export default Line
