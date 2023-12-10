// LIBS
import { useRef } from 'react'
import { Link } from 'react-router-dom'

// COMPONENTS
import Hero from '../components/Hero'
import CardReads from '../components/CardReads'
import CardProjects from '../components/CardProjects'
import Knowledge from '../components/Knowledge'
import Nav from '../components/Nav'

// TEXTS
import { textH1 } from '../constants/texts'

// IMAGES FOR KNOWLEDGE

import logoReact from '../assets/images/reactLogo.png'
import logoXml from '../assets/images/xml.svg'
import logoPython from '../assets/images/Python.png'
import logoOdoo2 from '../assets/images/odoo-logo.png'
import logoTailwind from '../assets/images/tailwindLogo.png'
import logoPostgres from '../assets/images/Postgres.png'
import logoArduino from '../assets/images/Arduino.png'
import logoFritzing from '../assets/images/Fritzing.png'
import logoSolid from '../assets/images/solid.png'
import vueProject from '../assets/images/formvue.png'
import criptosReact from '../assets/images/criptosReact.png'
import budgetProject from '../assets/images/budgets.jpg'

// STYLES
import '../styles/type.css'

const tecnologies = [ "Vue", "Tailwind", "CSS"]
const tecnologies2 = [ "React", "Tailwind"]
const tecnologies3 = [ "React", "CSS", "Swiper"]

const Home = () => {
	const refKnowledge = useRef(null)
	const refWorks = useRef(null)
	const refProjects = useRef(null)

	const style = {
		'--num': 34,
		width: `${34}ch`,
	}

	const handleClickWorks = () => {
		refWorks.current.scrollIntoView({ behavior: 'smooth' })
	}

	const handleClickProjects = () => {
		refProjects.current.scrollIntoView({ behavior: 'smooth' })
	}

	const handleClickKnowledge = () => {
		refKnowledge.current.scrollIntoView({ behavior: 'smooth' })
	}

	return (
		<>
			<header>
				<Nav
					handlerKnowledge={handleClickKnowledge}
					handlerWorks={handleClickWorks}
					handlerProjects={handleClickProjects}
				/>
			</header>

			<section className=''>
				<Hero />

				<div className='flex justify-center'>
					<h1 className='typed text-4xl my-5' style={style}>
						<span className='text-secondary'>{textH1.open}</span>
						{textH1.text}
						<span className='text-quaternary text-5xl'>{textH1.text2}</span>
						<span className='text-secondary'>{textH1.close}</span>
					</h1>
				</div>

				<div className='flex flex-col justify-center'>
					<div className='container mx-auto mb-5'>
						<p className='text-white text-xl text-center balance'>
							<span className='text-secondary text-3xl'>&lt;p&gt;</span>Desde la
							adolecencia me apaciono el mundo del desarrollo y por eso decidi
							estudiar Ingenieria en{' '}
							<span className='text-tertiary text-2xl'>
								Diseño de Entretenimiento Digital
							</span>
							, pero hace 3 años aproximadamente conoci el desarrollo web que
							para mi fue como amor a primera vista, y por esto me converti en
							<span className='text-primary text-2xl'>
								{' '}
								Fullstack Developer
							</span>
							. Siempre me ha gustado estar en constante aprendizaje para
							mejorar cada dia y por eso tengo una frase favorita que es del
							maestro Shifu de Kung Fu Panda:
							<span className='text-secondary text-2xl'>&lt;/p&gt;</span>
						</p>
						<p className='text-white text-xl text-center mt-5'>
							<span className='text-secondary text-3xl'>&lt;q&gt;</span>
							<q>
								Si solo haces lo que ya sabes hacer, no vas a llegar a ser más
								de lo que eres hoy
							</q>
							<span className='text-secondary text-3xl'>&lt;/q&gt;</span>
						</p>
					</div>
					<Link
						onClick={handleClickProjects}
						className='mx-auto bg-secondary text-white text-2xl px-5 py-2 rounded-md hover:bg-quaternary transition hover:-translate-y-1 duration-300'>
						Proyectos
					</Link>
				</div>
			</section>

			<section
				ref={refWorks}
				className='flex flex-col justify-center items-center mb-10'>
				<h2 className='text-5xl text-white mt-12 mb-10'>
					<span className='text-secondary'>&lt;h2&gt;</span>Mi Experiencia
					<span className='text-secondary'>&lt;/h2&gt;</span>
				</h2>

				<CardReads
					CompanyAndDate={
						'Inoxideas Internacional / Febrero 2020 - Noviembre 2021'
					}
					position={'Desarrollador de Producto'}
					tasks={
						'Alli me encargava del diseño de productos relacionados con domótica: sensores, microcontroladores, servomotores, etc. Empezando con dibujo preliminar del producto, un diseño básico de todo el circuito y para finalizar la programacion de los componentes.'
					}
					img={[logoArduino, logoFritzing, logoSolid]}
				/>
				<CardReads
					CompanyAndDate={'Seracis LTDA / Julio 2023 - ACTUALIDAD'}
					position={'Analista de TI'}
					tasks={
						'Estoy Implementando un ERP llamado Odoo para mejorar los procesos de la empresa, tambien, estoy apoyando en la organización de la infraestructura del area de tecnologia de la empresa por medio de flujos de procesos y Jira.'
					}
					img={[
						logoReact,
						logoTailwind,
						logoOdoo2,
						logoPython,
						logoPostgres,
						logoXml,
					]}
				/>
			</section>

			<section
				ref={refProjects}
				className='flex flex-col justify-center items-center my-10'>
				<h2 className='text-5xl mb-10 text-white'>
					<span className='text-secondary'>&lt;h2&gt;</span>Mis Proyectos
					<span className='text-secondary'>&lt;/h2&gt;</span>
				</h2>
				<div className='grid grid-cols-2 w-1/2 gap-4'>
					<CardProjects
						title={'Formulario Vue js'}
						description={
							'Este proyecto es un formulario de registro de usuarios, donde se puede ver la validación de los campos a medida que se van llenando, el uso de componentes y el uso de la libreria de tailwind css.'
						}
						img={vueProject}
            tecnologies={tecnologies}
					/>
					<CardProjects
						title={'Proyecto de Criptomonedas'}
						description={
							'Esta es una aplicacion web que nos permite ver el precio de las criptomonedas en tiempo real, tambien podemos ver el precio de las criptomonedas en diferentes monedas como el dolar, euro, libra esterlina, etc.'
						}
						img={criptosReact}
            tecnologies={tecnologies2}
					/>
					<CardProjects
						title={'Proyecto Presupuesto'}
						description={
							'En esta aplicacion se puede llevar un control de los ingresos y egresos de una persona, y adicionalmente podemos ver el porcentaje de gastos que tenemos al mes, tambien cuenta con un filtro para poder ver nuestros gastos por categoria.'
						}
						img={budgetProject}
            tecnologies={tecnologies3}
					/>
					<CardProjects
						title={'Proyecto 1'}
						description={
							'Lorem ipsum dolor sit amet'
						}
						img={vueProject}
					/>
				</div>
			</section>

			{/* <section
				ref={refKnowledge}
				className='flex flex-col justify-center items-center my-10'>
				<h2 className='text-5xl text-white'>
					<span className='text-secondary'>&lt;h2&gt;</span>Mis Conocimientos
					<span className='text-secondary'>&lt;/h2&gt;</span>
				</h2>
				<Knowledge />
			</section> */}
		</>
	)
}

export default Home
