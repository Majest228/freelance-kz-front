import {axiosWithoutToken, axiosWithToken} from '@/api/api'

export interface IOrder {
    title: string
    description: string
    price: number
}

export interface IOrderImage {
    orderId: number
    image: string
}

export interface IOrderResponse {
    term: number;
    price: number;
    priceWithCommission: number;
    typeCommission: 'client' | 'freelancer'
    orderId?: number
    comment: string
}

export const OrdersService = {
    async getAll() {
        const res = await axiosWithoutToken.get('/order/get-all')
        return res.data
    },
    async updateViewCount(id: number) {
        const res = await axiosWithToken.put(`/order/update-view/${id}`)
        return res.data
    },
    async getById(id: number) {
        const res = await axiosWithoutToken.get(`/order/${id}`)
        return res.data
    },
    async createOrder({title, description, price}: IOrder) {
        const res = await axiosWithToken.post<any, any, IOrder>('/order/create', {
            title: title,
            description: description,
            price: price
        })
        return res.data
    },
    async createOrderImage({orderId, image}: IOrderImage) {
        const res = await axiosWithToken.post<IOrderImage>('/order/create-image', {
            orderId: orderId,
            image: image
        })
        return res.data
    },
    async createResponseToOrder({term, typeCommission, priceWithCommission, price, orderId, comment}: IOrderResponse) {
        const res = await axiosWithToken.post<any, any, IOrderResponse>(`/order/create-response/${orderId}`, {
            term,
            price,
            priceWithCommission, typeCommission, comment
        })
        return res.data
    },
    async getResponseById(orderId: number) {
        const res = await axiosWithoutToken(`/order/get-response-order/${orderId}`)
        return res.data
    }


}
