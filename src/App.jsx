import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageLayout from './layouts/PageLayout'

import Home from './pages/Home'
import About from './pages/About'
import Works from './pages/Works'
import Contact from './pages/Contact'

import './styles/general.css'

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<PageLayout />}>
						<Route index element={<Home />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
