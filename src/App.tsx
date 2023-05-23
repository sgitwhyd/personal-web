import { Route, Routes } from "react-router-dom";

import Aos from "aos";
import "aos/dist/aos.css";

import { useEffect, Suspense, lazy } from "react";
import { useLocation } from "react-router-dom";
import { capitalize } from "./helpers/capitalize-text.helper";

import Layout from "@/pages/layout/layout.component";
import Spinner from "@/components/spinner/spinner.component";
const Home = lazy(() => import("@/pages/home/home.component"));
const Projects = lazy(() => import("@/pages/projects/project.component"));
const NotFoundPage = lazy(
	() => import("@/pages/not-found-page/not-found-page.component")
);
const Experience = lazy(
	() => import("@/pages/experience/experience.component")
);

function App() {
	const location = useLocation();

	useEffect(() => {
		const title = capitalize(
			location.pathname.slice(1, location.pathname.length)
		);
		document.title = `${title === "" ? "Home" : title} - Sigit 👋`;
		Aos.init();
	}, [location]);

	return (
		<Suspense fallback={<Spinner />}>
			<Layout>
				<Routes>
					<Route index path='/' element={<Home />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/experience' element={<Experience />} />
					<Route path='*' element={<NotFoundPage />} />
				</Routes>
			</Layout>
		</Suspense>
	);
}

export default App;
