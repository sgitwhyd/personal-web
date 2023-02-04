import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faBullseye } from '@fortawesome/free-solid-svg-icons';

import {
	achievement,
	experiences,
	organizations,
} from '../../data/experience.data';

const Experience = () => {
	return (
		<div className='z-[1] my-5 overflow-hidden dark:text-white md:mt-36'>
			<h1 className=' text-xl font-bold md:text-3xl ' data-aos='fade-right'>
				Works
			</h1>
			<div className='relative mt-5 md:mt-8'>
				<div
					className='absolute left-5 h-full rounded-md border-4 border-slate-900 dark:border-white md:left-10 '
					data-aos='fade-right'
					data-aos-duration='1000'></div>
				<ul>
					{experiences.map((experience, index) => (
						<li className='mb-5' key={index}>
							<div className='flex'>
								<div
									className=' z-10 hidden h-6  w-6 rounded-full bg-slate-900 dark:bg-white md:ml-8 md:block'
									data-aos='fade-right'
									data-aos-duration='1000'></div>
								<div
									className='ml-10 max-w-xl md:ml-4'
									data-aos='fade-left'
									data-aos-duration='1000'
									data-aos-delay={`${index + 2}00`}>
									<h2 className='text-xl font-bold md:text-2xl'>
										{experience.title}
									</h2>
									<p className='text-sm'>{experience.type}</p>
									<p className='text-sm'>{experience.date}</p>
									<p className='mt-4 text-xs md:text-base'>
										{experience.summary}
									</p>
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>

			{/* achievment */}
			<h1
				className='mt-8 text-end text-xl font-bold md:text-3xl'
				data-aos='fade-left'>
				Achievements
			</h1>
			<ul className='ml-2 mt-5 md:ml-6'>
				{achievement.map((item, index) => (
					<li
						className='flex items-center gap-3 md:gap-5'
						key={index}
						data-aos='fade-right'
						data-aos-delay={`${index + 2}00`}
						data-aos-duration='1000'>
						<FontAwesomeIcon size='2xl' icon={faTrophy} />
						<h2 className='text-xs md:text-lg'>{item.title}</h2>
					</li>
				))}
			</ul>

			{/* organization */}
			<h1 className='mt-8 text-xl font-bold md:text-3xl' data-aos='fade-right'>
				Organization
			</h1>
			<ul className='ml-2 mt-5 md:ml-6'>
				{organizations.map((item, index) => (
					<li
						className='mb-5 flex items-center gap-3 md:gap-5'
						key={index}
						data-aos-offset='0'
						data-aos='fade-left'
						data-aos-delay={`${index + 2}00`}
						data-aos-duration='1000'>
						<FontAwesomeIcon size='2xl' icon={faBullseye} />
						<h2 className='text-sm md:text-lg'>{item.title}</h2>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Experience;
