import Footer from '@/components/footer/Footer'
import './globals.css'
import dynamic from 'next/dynamic'

export const metadata = {
	title: 'Главная страница',
}

const Header = dynamic(() => import('@/components/header/Header'), {
	ssr: false,
})

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
