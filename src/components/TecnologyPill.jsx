import ReactLogo from '../assets/images/reactLogo.png'
import CssLogo from '../assets/images/css.png'
import SwiperLogo from '../assets/images/swiper-logo.svg'
import TailwindLogo from '../assets/images/tailwindLogo.png'
import VueLogo from '../assets/images/Vue.png'
import PrismaLogo from '../assets/images/prisma.png'
import NextLogo from '../assets/images/nextlogo.webp'
import PostgresLogo from '../assets/images/Postgres.png'

const technologyLogos = {
	ReactJS: ReactLogo,
	CSS: CssLogo,
	Swiper: SwiperLogo,
	Tailwind: TailwindLogo,
	VueJS: VueLogo,
  Prisma: PrismaLogo,
  NextJS: NextLogo,
  Postgres: PostgresLogo
}

const TecnologyPill = ({ text }) => {
	const image = technologyLogos[text] || null

	return (
		<div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 leading-5 text-teal-300'>
			<img
				src={image}
				alt='Logo de react js'
				width={25}
				className='items-end'
			/>
			<p className='text-white ms-1 font-bold text-base'>{text}</p>
		</div>
	)
}

export default TecnologyPill
