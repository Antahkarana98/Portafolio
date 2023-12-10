

import Tecnologies from '../components/Tecnologies'
import CardAbout from '../components/CardAbout'
import CardReads from '../components/CardReads'

import imgInfo from '../assets/images/foto_about.png'
import logoInox from '../assets/images/logo-inoxideas.png'
import logoGradi from '../assets/images/logo-gradi.svg'
import logoSeracis from '../assets/images/logo-seracis1.png'

import '../styles/type.css'
import '../styles/listAbout.css'

const About = () => {


	return (
		<>


			<section className='m-20 flex justify-center items-center w-4/5 mx-auto'>
				<div className='w-1/2'>
					<p className='text-white text-2xl text-justify'>
						<span className='text-secondary text-3xl'>&lt;p&gt;</span>Desde los
						16 años comence en el fantastico mundo de la programación, comence
						desarrollando programas con C++ y su sistema de formularios, y en la
						universidad aprendi sobre desarrollo de video juegos con unity y C#,
						tambíen, sobre vision artificial con Python y microcontroladores con
						arduino.
					</p>
					<p className='text-white text-2xl text-justify'>
						Pero conocí el desarrollo web, para mí fue como amor a primera vista
						y por eso decidi convertirme en desarrollador Fullstack, programando
						en tecnologias como{' '}
						<span className='text-primary text-3xl'>Ruby On Rails</span> y{' '}
						<span className='text-primary text-3xl'>MERN</span>.
						<span className='text-secondary text-3xl'>&lt;/p&gt;</span>
					</p>
				</div>
				<div className='w-1/2 flex justify-center'>
					<div>
						<img className='glass round-about' src={imgInfo} alt='random' />
					</div>
				</div>
			</section>

			<section>
				<div>
					<h2 className='text-4xl text-white text-center my-10'>
						Mi Experiencia laboral
					</h2>
				</div>

				<div className='grid grid-cols-3 mx-5 lg:w-4/5 lg:mx-auto'>
					<CardAbout
						logo={logoInox}
						title={'Diseñador de producto'}
						description={
							'Alli me desempeñaba como desarrollador de productos innovadores en el sector metal-mecanico, utilizano Arduino y Solid Edge para el diseño de los productos.'
						}
						company={'Inoxideas'}
						date={'25/02/2020 – 12/10/2021'}
					/>
					<CardAbout
						logo={logoGradi}
						title={'Desarrollador Fullstack Shopify'}
						description={
							'Era desarrollador Shopify creando temas personalizados para tiendas de comercio electronico, utilizando HTML, CSS, JavaScript, Liquid.'
						}
						company={'GradiWeb'}
						date={'10/05/2023 – 10/06/2023'}
					/>

					<CardAbout
						logo={logoSeracis}
						title={'Analista de TI'}
						description={
							'Estoy Implementando un ERP llamado Odoo para mejorar los procesos de la empresa, tambien, estoy apoyando en la organización de la infraestructura del area de tecnologia de la empresa por medio de flujos de procesos y Jira.'
						}
						company={'Seracis'}
						date={'25/07/2023 – Actualidad'}
					/>
				</div>
			</section>

			<section>
				<div>
					<h2 className='text-4xl text-white text-center my-10'>
						Mis Habilidades
					</h2>
				</div>

				<div className='flex justify-center gap-24 mb-10'>
					<Tecnologies
						title={'Front-end'}
						name={'frontEnd'}
						tecnologies={[
							'HTML',
							'CSS',
							'JavaScript',
							'React JS',
              'Vue JS',
              'Remix Run',
              'Next JS',
							'TailwindCSS',
							'Bootstrap',
              'Sass'
						]}
					/>

					<Tecnologies
						title={'Back-end'}
						name={'backEnd'}
						tecnologies={[
							'Ruby',
							'Ruby On Rails',
							'NodeJS',
							'Express',
							'MongoDB',
							'PostgreSQL',
              'SQL',
						]}
					/>

					<Tecnologies
						title={'Others'}
						name={'others'}
						tecnologies={[
							'Git',
							'Github',
							'Heroku',
							'Netlify',
							'Python',
              'C#',
              'Photoshop',
              'Illustrator',
              'Figma',
						]}
					/>
				</div>

        <div className=' w-4/5 mx-auto'>
          <h2 className='text-4xl text-white text-center my-10'>Mis estudios</h2>

          <div className='grid grid-cols-2'>
            <CardReads
              title={'Le Wagon'}
              description={'Ingenieria de Sistemas'}
              tecnologies={['C++', 'C#', 'Unity', 'Python', 'Arduino', 'Solid Edge']}
              date={'2018 – 2021'}
            />
          </div>

          <ul className="list-about vertical">
            <li>
              <span></span>
              <CardReads
                title={'Le Wagon'}
                description={'Ingenieria de Sistemas'}
                tecnologies={['C++', 'C#', 'Unity', 'Python', 'Arduino', 'Solid Edge']}
                date={'2018 – 2021'}
              />
            </li>
            <li>
              <span></span>
              <CardReads
              title={'Le Wagon'}
              description={'Ingenieria de Sistemas'}
              tecnologies={['C++', 'C#', 'Unity', 'Python', 'Arduino', 'Solid Edge']}
              date={'2018 – 2021'}
              />
            </li>
            <li>
              <span></span>
              <CardReads
              title={'Le Wagon'}
              description={'Ingenieria de Sistemas'}
              tecnologies={['C++', 'C#', 'Unity', 'Python', 'Arduino', 'Solid Edge']}
              date={'2018 – 2021'}
              />
            </li>
          </ul>

        </div>
			</section>
		</>
	)
}

export default About
