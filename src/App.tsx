import './App.css';
import { Route, Routes } from 'react-router-dom';
import AOS from 'aos';

import Layout from './pages/layout/layout.component';
import Home from './pages/home/home.component';
import Project from './pages/project/project.component';
import NotFoundPage from './pages/not-found-page/not-found-page.component';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { capitalize } from './helpers/capitalize-text.helper';
import Experience from './pages/experience/experience.component';
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
	const location = useLocation();

	useEffect(() => {
		const title = capitalize(
			location.pathname.slice(1, location.pathname.length)
		);
		document.title = `${title === '' ? 'Home' : title} - Sigit 👋`;
		Aos.init();
	}, [location]);

	return (
		<Layout>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/project' element={<Project />} />
				<Route path='/experience' element={<Experience />} />
				<Route path='*' element={<NotFoundPage />} />
			</Routes>
		</Layout>
	);
}

export default App;
