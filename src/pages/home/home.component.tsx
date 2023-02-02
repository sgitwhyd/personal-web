import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';

import { SosialLinks } from '../../data/sosial-link.data';

import Hero from '../../assets/hero.png';

const Home = () => {
	return (
		<div className='mt-[55%] flex min-h-screen flex-col items-center justify-center gap-10 text-black dark:text-white md:mt-0 md:min-h-screen md:grid-cols-2'>
			<div className='flex items-center gap-10 md:pt-24 lg:pt-32'>
				<div
					className='flex w-full flex-col text-center md:w-3/4 md:text-start'
					data-aos='fade-right'
					data-aos-anchor='#image-hero'
					data-aos-offset='300'
					data-aos-easing='ease-in-sine'>
					<h1 className='text-lg font-bold leading-snug md:text-2xl'>
						<i>Hello</i>,👋 I'm Sigit
					</h1>
					<h3 className='text-xl font-bold md:text-3xl'>Software Developer</h3>
					<p className='mt-5 text-xs font-medium  tracking-[1.3px] md:text-base'>
						Hello my name is<strong> Sigit Wahyudi</strong>,I am an informatics
						engineering student at Muhammadiyah University of Surakarta. I like
						challenges and learn new things. now I focus on{' '}
						<i>web development</i> and already have 3 years experience
					</p>
					<div className=' mt-5 flex justify-evenly md:hidden'>
						{SosialLinks.map((item, index) => {
							return (
								<Link
									key={index}
									to={item.link}
									target='_blank'
									className='scale-[0.8] duration-150 ease-in-out hover:scale-100 dark:text-white'>
									<FontAwesomeIcon
										size='2xl'
										icon={item.icon}
										data-aos='fade-right'
										data-aos-delay={`${index}00`}
										data-aos-duration='1000'
									/>
								</Link>
							);
						})}
					</div>
				</div>
				<div
					className='hidden flex-col md:flex  md:justify-center'
					id='image-hero'>
					<img
						src={Hero}
						alt='profile img'
						className='w-96'
						data-aos='zoom-in-up'
						data-aos-offset='300'
						data-aos-easing='ease-in-sine'
					/>
					<button
						className='contact-me mt-5'
						data-aos='fade-left'
						data-aos-easing='ease-in-sine'>
						Contact Me{' '}
					</button>
				</div>
			</div>
			<a href='#skill' className='flex animate-bounce justify-center'>
				<FontAwesomeIcon size='2xl' icon={faChevronCircleDown} />
			</a>

			<div id='skill'>
				<h1 className='mt-5 text-3xl font-bold dark:text-white'>Skills</h1>
			</div>
		</div>
	);
};

export default Home;
