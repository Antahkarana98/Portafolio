import { Link } from "react-router-dom"
import SocialMedia from "./SocialMedia"
import {dateYear} from "../helpers/dateFooter"
import '../styles/footer.css'

const year = dateYear(new Date())

const Footer = () => {
	return (
    <>
      <section className='flex justify-center flex-col items-center mt-10'>
        <div className="visible lg:hidden">

          <SocialMedia />
        </div>

        <div className="text-white text-xl glass-footer">
          <p>© {year} Camilo Alejandro Ardila Molina</p>
        </div>
      </section>
    </>
  )
}

export default Footer
