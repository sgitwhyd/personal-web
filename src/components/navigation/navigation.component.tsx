import ButtonDrawerMobile from '../navigation-mobile/navigation-mobile.component';
import Toggle from '../toggle/toggle.component';

import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Navlinks = [
	{
		name: 'Home',
		path: '/',
	},
	{
		name: 'Project',
		path: '/project',
	},
	{
		name: 'Experience',
		path: '/experience',
	},
];

const Navigation = () => {
	const [scrollPosition, setScrollPosition] = useState(0);
	const { pathname } = useLocation();

	useEffect(() => {
		function handleScroll() {
			setScrollPosition(window.pageYOffset);
		}

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<>
			<nav
				className={`fixed z-10 hidden w-full items-center border-b border-gray-200 py-5 md:block md:backdrop-blur ${
					scrollPosition > 46
						? pathname === '/experience'
							? 'text-dark dark:text-white'
							: 'text-white'
						: 'text-black dark:text-white'
				}`}>
				<div className='container mx-auto flex w-full items-center  justify-between px-4 md:w-[900px]'>
					<div className='text-2xl font-medium '>
						<Link to={'/'}>
							<strong>Git</strong>hub
						</Link>
					</div>
					<div className=' hidden w-80 items-center justify-between  md:flex'>
						{Navlinks.map((link: any, index: any) => {
							return (
								<Link
									key={index}
									className={`text-base font-semibold ${
										index === 0 ? 'hidden' : ''
									}`}
									to={link.path}>
									{link.name}
								</Link>
							);
						})}
						<Toggle />
					</div>
				</div>
			</nav>
			<ButtonDrawerMobile navlinks={Navlinks} />
		</>
	);
};

export default Navigation;
