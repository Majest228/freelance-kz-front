import styles from './OrderRequest.module.scss'
import OrderRequestRadios from './order-request-radios/OrderRequestRadios'
import {useState} from "react";
import {useMutation} from "react-query";
import {IOrderResponse, OrdersService} from "@/services/orders/orders.service";
import {useParams, usePathname} from "next/navigation";

export interface ITypesCommission {
    id: string
    name: string
    value: string
}

const OrderRequest = () => {
    const type_commission: ITypesCommission[] = [
        {
            id: "0",
            name: 'Комиссию 9% оплачивает заказчик',
            value: 'client',
        },
        {
            id: "1",
            name: 'Комиссию 9% оплачивает фрилансер',
            value: 'freelancer',
        },

    ]

    const [selectedOption, setSelectedOption] = useState(null)
    const handleOptionChange = event => {
        setSelectedOption(event.target.value)
    }

    const [priceWithout, setPriceWithout] = useState(0)
    const [day, setDay] = useState(0)
    const [comment, setComment] = useState("")
    const pathname = usePathname()
    const params = useParams()
    // console.log('p', params.slug,)
    const {mutate} = useMutation(['create-response'], ({
                                                           price,
                                                           priceWithCommission,
                                                           typeCommission,
                                                           term,
                                                           orderId,
                                                           comment
                                                       }: IOrderResponse) => OrdersService.createResponseToOrder({
        term: day,
        typeCommission: selectedOption,
        priceWithCommission: priceWithout,
        price: priceWithout,
        orderId: +params?.slug,
        comment
    }), {
        onSuccess() {
            console.log('good')
        }
    })
    return (
        <div className={styles.order__request}>
            <h3 className={styles.order__request__title}>Ваша заявка</h3>
            <div className={styles.order__request__inputs}>
                <div className={styles.order__request__inputs__item}>
                    <input onChange={(e) => setPriceWithout(+e.target.value)} type='text' placeholder='Цена'/>
                    <span>KZT</span>
                </div>
                <div className={styles.order__request__inputs__item}>
                    <input onChange={(e) => setDay(+e.target.value)} type='text' placeholder='Сроки'/>
                    <span>Дней</span>
                </div>
            </div>
            <div className={styles.order__request__radio}>
                {type_commission.map(type => <OrderRequestRadios selectedOption={selectedOption}
                                                                 handleOptionChange={handleOptionChange} type={type}/>)}

            </div>
            <div className={styles.order__request__desc}>
                <input onChange={(e) => setComment(e.target.value)} type='text' placeholder='Комментарий..'/>
            </div>
            <button onClick={() => mutate(
                {
                    term: day,
                    typeCommission: selectedOption,
                    priceWithCommission: priceWithout,
                    price: priceWithout,
                    comment: comment,
                    orderId: +params?.slug
                })} className={styles.order__request__button}>Добавить
                заявку
            </button>
        </div>
    )
}

export default OrderRequest
