'use client'
import Footer from '@/components/footer/Footer'
import './globals.css'
import dynamic from 'next/dynamic'
import {useState} from 'react'
import {Provider} from 'react-redux'
import {store} from '@/store/store'
import styles from './layout.module.scss'
import {QueryClient, QueryClientProvider} from 'react-query'

export const metadata = {
    title: 'Главная страница',
}

const queryClient = new QueryClient({defaultOptions: {queries: {refetchOnWindowFocus: false}}})

const Header = dynamic(() => import('@/components/header/Header'), {
    ssr: false,
})

const RootLayout = ({children}: any) => {
    const [isOpened, setIsOpened] = useState(false)

    return (
        <html lang='en'>
        <body>
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <div className={styles.wrapper} style={{position: 'relative'}}>
                    <Header isOpened={isOpened} setIsOpened={setIsOpened}/>
                    <main className={styles.main}>{children}</main>
                    <Footer/>
                </div>
            </Provider>
        </QueryClientProvider>
        </body>
        </html>
    )
}

export default RootLayout
