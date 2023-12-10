import TecnologyPill from './TecnologyPill'

const CardProjects = ({ title, description, img, tecnologies }) => {
	return (
		<>
			<article className='p-4 hover-card-reads rounded-xl height-card flex flex-col'>
				<div>
					<header>
						<img
							src={img}
							alt='Project-images'
							className='h-96 w-full rounded-xl'
						/>
						<h3 className='text-2xl text-slate-200 my-2'>
							<span className='text-secondary'>&lt;h3&gt;</span>
							{title}
							<span className='text-secondary'>&lt;/h3&gt;</span>
						</h3>
					</header>

					<p className='leading-normal text-slate-300 mb-2 text-xl'>
						<span className='text-secondary'>&lt;p&gt;</span>
						{description}
						<span className='text-secondary'>&lt;/p&gt;</span>
					</p>
				</div>

				<div className='flex items-end gap-2 mt-auto'>
					{tecnologies?.map((tecnology, i) => (
						<TecnologyPill key={i} text={tecnology} />
					))}
				</div>
			</article>
		</>
	)
}

export default CardProjects
