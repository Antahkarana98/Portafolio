import { useState } from 'react'
import { Link } from 'react-router-dom'
import SocialMedia from './SocialMedia'

import Curriculum from '../assets/Curriculum-vitae-Camilo-Ardila2.pdf'
import '../styles/nav.css'

const Nav = ({handlerKnowledge, handlerProjects, handlerWorks}) => {
	const [isChecked, setIsChecked] = useState(false)


	const handleCheck = () => {
		setIsChecked(!isChecked)
	}

	return (
		<>
			<nav className='top-nav mt-5 flex justify-between'>
				<div className='lg:basis-1/3 flex justify-center order-2 lg:order-1'>

					<input
						id='menu-toggle'
						type='checkbox'
						checked={isChecked}
						onChange={handleCheck}
					/>

					<label className='menu-button-container' htmlFor='menu-toggle'>
						<div className='menu-button'></div>
					</label>

					<ul className='menu text-base font-bold uppercase flex'>

						<li onClick={handleCheck}>
							<Link className='' onClick={handlerWorks}>
								Experiencia
							</Link>
						</li>

						<li onClick={handleCheck}>
              <Link className='' onClick={handlerProjects}>
								Proyectos
							</Link>
						</li>

						<li onClick={handleCheck}>
              <Link className='' onClick={handlerKnowledge}>
								Conocimientos
							</Link>
						</li>

						<li onClick={handleCheck}>
							<a
								href={Curriculum}
								download='Curriculum-vitae-Camilo-Ardila.pdf'
								target='_blank'
								rel='noreferrer'>
								<button>CV</button>
							</a>
						</li>
						<div className='dot'></div>
					</ul>
				</div>

				<div className='lg:basis-1/3 lg:flex justify-center hidden lg:visible lg:order-3'>
					<SocialMedia />
				</div>
			</nav>

		</>
	)
}

export default Nav
