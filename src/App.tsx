import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './pages/layout/layout.component';
import { GlobalRoute } from './routes/route';
import Home from './pages/home/home.component';
import Project from './pages/project/project.component';
import NotFoundPage from './pages/not-found-page/not-found-page.component';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { capitalize } from './helpers/capitalize-text.helper';
import Experience from './pages/experience/experience.component';

function App() {
	const location = useLocation();
	useEffect(() => {
		const title = capitalize(
			location.pathname.slice(1, location.pathname.length)
		);
		document.title = `${title === '' ? 'Home' : title} - Sigit 👋`;
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