'use client'
import Line from '@/components/ui/line/Line'
import styles from './CreateOrder.module.scss'
import Editor from '@/components/ui/editor/Editor'
import {useEffect, useRef, useState} from 'react'
import FileIco from '@/components/svgs/File'
import {useMutation} from "react-query";
import {OrdersService} from "@/services/orders/orders.service";
import {useRouter} from "next/navigation";
import {axiosWithToken} from "@/api/api";

export interface ITypes {
    id: string
    name: string
    value: string
}

const CreateOrder = () => {
    const [editorState, setEditorState] = useState('')
    const [title, setTitle] = useState('')
    const [newOrderId, setNewOrderId] = useState(0)

    const type_price: ITypes[] = [
        {
            id: "0",
            name: 'Договорная',
            value: 'dogovor',
        },
        {
            id: "1",
            name: 'Указать цену',
            value: 'price',
        },
    ]
    const [selectedOption, setSelectedOption] = useState(null)
    const [price, setPrice] = useState(
        selectedOption == 'dogovor' ? 'Договорная' : 0
    )

    const handleOptionChange = event => {
        setSelectedOption(event.target.value)
    }
    const handleEditorChange = content => {
        setEditorState(content)
    }
    const inputRef = useRef(null)
    const [selectedFiles, setSelectedFiles] = useState([])

    const handleFileChange = event => {
        const fileList = event.target.files
        const filesArray = Array.from(fileList)
        setSelectedFiles(filesArray)
    }
    const [imageUrl, setImageUrl] = useState([])

    const router = useRouter()

    const {mutate: mutateCreateOrder, data} = useMutation(['create order'], ({
                                                                                 title,
                                                                                 description,
                                                                                 price
                                                                             }) => OrdersService.createOrder({
        title: title,
        description: editorState,
        price: price
    }), {
        onSuccess(res) {
            selectedFiles.forEach(file => axiosWithToken.post('/order/create-image', {
                image: file.name,
                orderId: res
            }))
            router.push(`/orders/${res}`)
        }
    })

    useEffect(
        () =>
            console.log(
                selectedFiles,
                'selected',
                'title',
                title,
                'editorState',
                editorState,
                selectedOption,
                'selectedOption',
                data, 'data'
            ),
        [selectedFiles, editorState, title, selectedOption]
    )

    return (
        <div className={styles.create__order}>
            <div className={styles.create__order__container}>
                <h3 className={styles.create__order__title}>Создание проекта</h3>
                <Line bottom={31} top={40}/>
                <div className={styles.create__order__name}>
                    <label htmlFor=''>Название проекта</label>
                    <input type='text' onChange={e => setTitle(e.target.value)}/>
                </div>

                <div className={styles.create__order__desc}>
                    <label htmlFor=''>Описание проекта</label>
                    <div className={styles.create__order__desc__editor}>
                        <Editor onChange={handleEditorChange} value={editorState}/>
                    </div>
                </div>
                <button
                    className={styles.create__order__file}
                    onClick={() => inputRef.current.click()}
                >
                    <FileIco/>
                    <input
                        type='file'
                        multiple
                        hidden
                        ref={inputRef}
                        onChange={handleFileChange}
                    />
                </button>
                {selectedFiles.map((file, index) => (
                    <li key={index}>{file.name}</li>
                ))}
                <div className={styles.create__order__budget}>
                    <h3 className={styles.create__order__budget__title}>Бюджет</h3>
                    <div className={styles.create__order__budget__type}>
                        {type_price.map(type => (
                            <div className={styles.create__order__budget__type__filter}>
                                <label
                                    className={styles.create__order__budget__type__filter__label}
                                    htmlFor={type.id}
                                >
                                    <input
                                        className={
                                            styles.create__order__budget__type__filter__label__input
                                        }
                                        type='radio'
                                        id={type.id}
                                        value={type.value}
                                        checked={selectedOption === type.value}
                                        onChange={handleOptionChange}
                                    />
                                    <span
                                        className={
                                            styles.create__order__budget__type__filter__label__fake
                                        }
                                    ></span>
                                    <p
                                        className={
                                            styles.create__order__budget__type__filter__label__title
                                        }
                                    >
                                        {type.name}
                                    </p>
                                </label>
                            </div>
                        ))}
                    </div>
                    {selectedOption == 'price' ? (
                        <div className={styles.create__order__budget__number}>
                            <input
                                onChange={e => setPrice(e.target.value)}
                                placeholder='500'
                                type='text'
                            />
                            <p>KZT</p>
                        </div>
                    ) : (
                        ''
                    )}
                </div>
                <button onClick={() => {
                    mutateCreateOrder({
                        title: title,
                        description: editorState,
                        price: price
                    })
                }} className={styles.create__order__response}>
                    Разместить проект
                </button>
            </div>
        </div>
    )
}

export default CreateOrder
