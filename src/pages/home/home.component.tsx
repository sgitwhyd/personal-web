import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChevronCircleDown,
	faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';

import { SosialLinks } from '../../data/sosial-link.data';
import { skills, tools } from '../../data/experience.data';

import Hero from '../../assets/hero.jpg';
import myResume from '../../assets/sigitwahyudi_resume.pdf';

const Home = () => {
	return (
		<div className='flex min-h-screen flex-col items-center justify-center gap-10 text-black dark:text-white md:mt-0 md:min-h-screen md:grid-cols-2'>
			<div className='flex h-screen flex-col items-center justify-center'>
				<div className='flex  items-center gap-10 md:mb-10 md:pt-24 lg:pt-32'>
					<div
						className='flex w-full flex-col text-center md:w-3/4 md:text-start'
						data-aos='fade-right'
						data-aos-anchor='#image-hero'
						data-aos-offset='300'
						data-aos-duration='600'
						data-aos-easing='ease-in-sine'>
						<h1 className='text-lg font-bold leading-snug md:text-2xl'>
							<i>Hello</i>,👋 I'm Sigit
						</h1>
						<h2 className='text-xl font-bold md:text-3xl'>
							Software Developer
						</h2>
						<p className='mt-5 text-xs font-medium  tracking-[1.3px] md:text-base'>
							Hello, I'm <strong>Sigit Wahyudi</strong>, a student of the
							Informatics Study Program at the Muhammadiyah University of
							Surakarta. I like programming since 2nd grade of high school until
							now I have been studying web programming for more than 3 years and
							now I am focusing on developing web using JavaScript language.
						</p>
						<div className=' mt-5 flex justify-evenly md:hidden'>
							{SosialLinks.map((item, index) => {
								return (
									<a
										key={index}
										href={item.link}
										target='_blank'
										className='scale-[0.8] duration-150 ease-in-out hover:scale-100 dark:text-white'>
										<FontAwesomeIcon
											size='2xl'
											icon={item.icon}
											data-aos='fade-right'
											data-aos-delay={`${index}00`}
											data-aos-duration='1000'
										/>
									</a>
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
							width={280}
							height={280}
							data-aos='zoom-in-up'
							data-aos-offset='300'
							data-aos-duration='600'
							data-aos-easing='ease-in-sine'
						/>
						<a
							href={myResume}
							target='_blank'
							aria-label='download resume'
							className='mt-5 rounded-sm border-2  border-slate-900 py-3 text-center text-lg text-slate-900 shadow-[8px_8px_0px_0px_#000000] transition-all hover:shadow-[0_0_#000000]  hover:transition-all dark:border-white dark:bg-slate-900  dark:text-white dark:shadow-[8px_8px_0px_0px_#ffffff] dark:hover:shadow-[0_0_#ffffff]'>
							Get Resume
							<FontAwesomeIcon
								className='ml-5'
								size='sm'
								icon={faArrowUpRightFromSquare}
							/>
						</a>
					</div>
				</div>
				<a
					href='#skill'
					aria-label='anchor scroll down'
					className=' mt-10 flex animate-bounce justify-center md:mt-0'>
					<FontAwesomeIcon size='2xl' icon={faChevronCircleDown} />
				</a>
			</div>

			<div id='skill'>
				<h1 className='mt-5 text-center text-3xl font-bold dark:text-white'>
					Skills
				</h1>

				<div className='mt-8 flex flex-wrap justify-center gap-10'>
					{skills.map((skill, index) => (
						<div
							key={index}
							data-aos='zoom-in'
							data-aos-delay={`${index}00`}
							data-aos-duration='500'
							data-aos-offset='100'
							data-aos-easing='ease-in-out'
							data-aos-once='false'>
							<div className='flex flex-col items-center px-2 py-4 transition-all hover:-translate-y-2'>
								<i className={`${skill.icon} text-6xl`} />
								<p className='mt-3 text-sm font-bold'>{skill.title}</p>
							</div>
						</div>
					))}
				</div>
			</div>

			<div id='tools'>
				<h1 className='mt-5 text-center text-3xl font-bold dark:text-white'>
					Tools
				</h1>

				<div className='mt-8 flex  flex-wrap justify-center gap-10'>
					{tools.map((tool, index) => (
						<div
							key={index}
							data-aos='zoom-in'
							data-aos-delay={`${index}00`}
							data-aos-duration='500'
							data-aos-offset='100'
							data-aos-easing='ease-in-out'
							data-aos-once='false'>
							<div className='flex flex-col items-center px-2 py-4 transition-all hover:-translate-y-2'>
								<i className={`${tool.icon} text-6xl`} />
								<p className='mt-3 text-sm font-bold'>{tool.title}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Home;
