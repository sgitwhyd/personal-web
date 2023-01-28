import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faGithubAlt,
	faFacebookSquare,
	faInstagram,
	faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';

import Hero from '../../assets/hero.png';
import GithubIcon from '../../assets/github.svg';
import FacebookIcon from '../../assets/facebook.svg';
import InstagramIcon from '../../assets/instagram.svg';
import LinkedinIcon from '../../assets/linkedin.svg';

const SosialLinks = [
	{
		name: GithubIcon,
		icon: faGithubAlt,
		link: '',
	},
	{
		name: FacebookIcon,
		icon: faFacebookSquare,
		link: '',
	},
	{
		name: InstagramIcon,
		icon: faInstagram,
		link: '',
	},
	{
		name: LinkedinIcon,
		icon: faLinkedin,
		link: '',
	},
];

const Home = () => {
	return (
		<div className='mt-[55%] flex flex-col items-center justify-center gap-10 text-black dark:text-white md:mt-0 md:min-h-screen md:grid-cols-2'>
			<div className='flex items-center gap-10 md:pt-24 lg:pt-32'>
				<div className='flex w-full flex-col text-center md:w-3/4 md:text-start'>
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
					<div className='mt-5 flex justify-evenly md:w-52 md:justify-between'>
						{SosialLinks.map((item, index) => {
							return (
								<Link
									key={index}
									to={item.link}
									target='_blank'
									className='scale-[0.8] duration-150 ease-in-out hover:scale-100'>
									<FontAwesomeIcon size='2xl' icon={item.icon} />
								</Link>
							);
						})}
					</div>
				</div>
				<div className='hidden flex-col md:flex  md:justify-center'>
					<img src={Hero} alt='profile img' className='w-96' />
					<button className='contact-me mt-5'>Contact Me </button>
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
