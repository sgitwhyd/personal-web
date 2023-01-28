import Home from '../pages/home/home.component';
import { RouteObject } from 'react-router-dom';

export const GlobalRoute: RouteObject[] = [
	{
		path: '/',
		element: <Home />,
	},
];
