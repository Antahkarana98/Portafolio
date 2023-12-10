
import { Outlet } from 'react-router-dom'


const pageLayout = () => {



	return (
		<>
			<main>
				<Outlet />
			</main>
		</>
	)
}

export default pageLayout
