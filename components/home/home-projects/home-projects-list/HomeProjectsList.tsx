'use client'
import styles from '../../Home.module.scss'
import {useQuery} from 'react-query'
import {OrdersService} from '@/services/orders/orders.service'
import dynamic from 'next/dynamic'

export interface IProduct {
    description: string
    title: string
    price: number
    views: number
    response: number
    id: number
}

const Product = dynamic(() => import('../../../ui/product/Product'), {
    ssr: false,
})

const HomeProjectsList = ({type}) => {
    const {
        data: products,
        isError,
        isLoading,
    } = useQuery('orders', OrdersService.getAll)
    console.log('data', products)
    return (
        <div className={styles.home__projects__list}>
            {type == 'order'
                ? isLoading
                    ? []
                    : products.slice(0, 6).map((product: IProduct) => (
                        <Product
                            id={product.id}
                            description={product.description}
                            title={product.title}
                            price={product.price}
                            views={product.views}
                            response={product.response}
                            createdAt={product.createdAt}
                        />
                    ))
                : ''}
            {}
        </div>
    )
}

export default HomeProjectsList
