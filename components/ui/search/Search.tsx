import SearchIco from '@/components/svgs/Search'
import styles from './Search.module.scss'
import { ISearch } from './search.interface'

const Search = ({ text }: ISearch) => {
	return (
		<div className={styles.search}>
			<input type='text' placeholder={text} />
			<button>
				<SearchIco />
			</button>
		</div>
	)
}

export default Search
