import { Link } from 'react-router-dom'
import Icon from './Icon'
import { faGithubSquare, faKickstarter, faLinkedin, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'


const SocialMedia = () => {
  return (
    <div>
      <ul className="flex gap-3 text-white my-2">
        <li>
          <Link
            to='https://www.linkedin.com/in/camilo-alejandro-ardila-molina-2b761b230/'
            target='_blank'
            className=''
          >
            <Icon
              css='text-5xl hover:text-linkedin transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'
              icon={faLinkedin}
            />
          </Link>
        </li>
        <li>
          <Link
            to='https://www.linkedin.com/in/camilo-alejandro-ardila-molina-2b761b230/'
            target='_blank'
          >
            <Icon
              css=' text-5xl hover:text-github transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'
              icon={faGithubSquare}
            />
          </Link>
        </li>
        <li>
          <Link
            to='https://www.linkedin.com/in/camilo-alejandro-ardila-molina-2b761b230/'
            target='_blank'
          >
            <Icon
              css='text-5xl hover:text-youtube transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'
              icon={faYoutubeSquare}
            />
          </Link>
        </li>
        <li>
          <Link
            to='https://www.linkedin.com/in/camilo-alejandro-ardila-molina-2b761b230/'
            target='_blank'
          >
            <Icon
              css="text-5xl hover:text-kickstarter transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              icon={faKickstarter}
            />
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default SocialMedia
