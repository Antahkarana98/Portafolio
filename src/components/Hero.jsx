import { useState, useEffect, useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import '../styles/hero.css'
import image1 from '../assets/images/fotoO.png'
import image2 from '../assets/images/fotoO2.png'


const Hero = () => {

  const ref = useRef(null)
  const [leave, setLeave] = useState(false)
  const [slideValue, setSlideValue] = useState(50)
  const [width, setWidth] = useState(0)

  useLayoutEffect(() => {
    setWidth(ref.current.clientWidth)
  }, [])

  useEffect(() => {
    function handleWindowResize() {
      setWidth(ref.current.clientWidth);
    }

    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);


  const handleMouseLeave = () => {
    setSlideValue(50);
    setLeave(!leave);
    console.log(leave);
  }

  const handleMouseEnter = () => {
    setLeave(!leave);
    console.log(leave);
  }

  const handleMove = (e) => {
    setSlideValue(((e.clientX - width / 2) * 100) / width);
  }

  const style = {
    "clip-path": `polygon(0 0, ${slideValue}% 0, ${slideValue}% 100%, 0 100%)`,
  }

  const style2 = {
    "clipPath": `polygon(0 0, ${slideValue}% 0, ${slideValue}% 100%, 0 100%)`,

  }

	return (
		<>


      <section
      className={`container-hero`}
      onMouseMove={e => handleMove(e)}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      ref={ref}
      >
        <div
          className={`split`}
        >
          <img src={image1} alt='Lordparcerito' className={``}  />
        </div>

        <div
          className={`split img2`}>
          <img src={image2} alt='Lordparcerito' style={style2} />
        </div>
      </section>

		</>
	)
}

export default Hero
