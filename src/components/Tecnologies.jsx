import imgHtml from "../assets/images/html-logo.png"



const Tecnologies = ({title, name, tecnologies}) => {

  return (
    <div className="glass p-5 rounded-xl">
      <h3 className='text-4xl text-white'><span className="text-secondary">&lt;h3&gt;</span>{title}<span className="text-secondary">&lt;/h3&gt;</span></h3>
      <img className='w-72 mx-auto my-5' src={imgHtml} alt='html-logo' />

      <div className='flex justify-center text-2xl'>
        <div className="my-5">
          <p className='text-tertiary'><span className="text-quaternary">const</span> {name}: {'{'}</p>
          <ul className='ms-5 my-3'>
            {tecnologies.map((tecnology, i) => {
              return <li key={i} className='text-white text-xl'>- &quot;{tecnology}&quot;,</li>
            })}
          </ul>
          <p className="text-tertiary">{'}'}</p>
        </div>
      </div>
    </div>
  )
}

export default Tecnologies
