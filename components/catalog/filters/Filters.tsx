import styles from './Filters.module.scss'
import {IFilters} from './filter.interface'
import Filter from './filter/Filter'

const Filters = ({type}) => {
    const filters: IFilters[] = [
        {
            id: '0',
            name: 'Разработка',
            count: 1059,
        },
        {
            id: '1',
            name: 'Администрирование',
            count: 88,
        },
        {
            id: '2',
            name: 'Тестирование',
            count: 132,
        },
        {
            id: '3',
            name: 'Дизайн',
            count: 149,
        },
        {
            id: '4',
            name: 'Маркетинг',
            count: 65,
        },
        {
            id: '5',
            name: 'Разное',
            count: 23,
        },
    ]
    return (
        <div className={styles.filters}>
            <h3 className={styles.filters__title}>
                {type == 'orders' ? 'Категории' : 'Все специальности'}
            </h3>
            <div className={styles.filters__items}>
                {filters.map((filter: IFilters) => (
                    <Filter key={filter.id} filter={filter}/>
                ))}
            </div>
        </div>
    )
}

export default Filters
