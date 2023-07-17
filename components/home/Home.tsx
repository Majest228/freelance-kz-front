import Link from 'next/link'
import styles from './Home.module.scss'
import HomeIntro from './home-intro/HomeIntro'

import { Open_Sans } from 'next/font/google'
import Line from '../ui/line/Line'
import HomeBest from './home-best/HomeBest'
import HomeProjects from './home-projects/HomeProjects'
import HomeContest from './home-contest/HomeContest'
const openSans = Open_Sans({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700', '800'],
})

const Home = () => {
	return (
		<div style={openSans.style} className={styles.home}>
			<div className={styles.home__container}>
				<HomeIntro />
				<Line top={40} />
				<HomeBest />
				<HomeProjects />
				<HomeContest />
			</div>
		</div>
	)
}

export default Home
