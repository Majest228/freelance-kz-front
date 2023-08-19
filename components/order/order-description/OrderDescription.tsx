import styles from './OrderDescription.module.scss'

const OrderDescription = ({order}) => {
    return <p dangerouslySetInnerHTML={{
        __html: order?.description,
    }} className={styles.order__desc}>
    </p>
}

export default OrderDescription
