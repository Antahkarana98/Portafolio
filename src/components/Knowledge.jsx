import logoReact from '../assets/images/reactLogo.png'
import logoXml from '../assets/images/xml.svg'
import logoPython from '../assets/images/Python.png'
import logoTailwind from '../assets/images/tailwindLogo.png'
import logoPostgres from '../assets/images/Postgres.png'

const knowledge = () => {
  return (
    <div className='grid grid-cols-2 w-2/4 gap-10' id='knowledge'>
      <div>
        <h3>Front-end</h3>
        <div className='grid grid-cols-3'>
          <img src={logoReact} alt="" />
          <img src={logoPython} alt="" />

          <img src={logoPostgres} alt="" />
        </div>
      </div>
      <div>
        <h3>Back-end</h3>
        <div className='grid grid-cols-3'>
          <img src={logoReact} alt="" />
          <img src={logoPython} alt="" />
  
          <img src={logoPostgres} alt="" />
        </div>
      </div>
    </div>
  )
}

export default knowledge
