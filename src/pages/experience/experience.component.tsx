import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faBullseye } from '@fortawesome/free-solid-svg-icons';

const experienc = [
	{
		title: 'Frontend Engineer | CV Zaman Now',
		date: '2022 - Present',
		summary:
			'Responsible for any display that the user will see Make code for easy maintenance Ensuring the suitability of the design on the web Participated in continuous improvement by generating suggestions, engaging in problem-solving activities to support teamwork',
	},
	{
		title: 'Freelance Front End Developer | Fastwork',
		date: 'September 2020 - Present',
		summary:
			'Apply web design principles and responsibly ensure that the companys website runs well across multiple devices. Work with developers, designers, and other product owners. Create reusable code.',
	},
];

const achievement = [
	{
		title:
			'2nd place in the UI/UX competition at the 2022 BEM FKI Communication and Informatics Festival | Univesitas Muhammadiyah Surakarta',
	},
];

const organizations = [
	{
		title:
			'Head of social affairs - Himpunan Mahasiswa Teknik Informatika UMS 2021-2022.',
	},
	{
		title:
			'Staf Sosial affairs | Himpunan Mahasiswa Teknik Informatika UMS 2020 - 2021 ',
	},
];

const Experience = () => {
	return (
		<div className='my-5 dark:text-white md:mt-24'>
			<h1 className=' text-xl font-bold md:text-3xl '>Works</h1>
			<div className='relative mt-5 md:mt-8'>
				<div className='absolute left-5 h-full border-4 border-slate-900 dark:border-white md:left-10'></div>
				<ul>
					{experienc.map((experience, index) => (
						<li className='mb-5' key={index}>
							<div className='flex'>
								<div className=' hidden h-6  w-6 rounded-full bg-slate-900 dark:bg-white md:ml-8 md:block'></div>
								<div className='ml-10 max-w-xl md:ml-4'>
									<h5 className='text-xl font-bold md:text-2xl'>
										{experience.title}
									</h5>
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
			<h1 className='mt-8 text-end text-xl font-bold md:text-3xl'>
				Achievement
			</h1>
			<ul className='ml-2 mt-5 md:ml-6'>
				{achievement.map((item, index) => (
					<li className='flex items-center gap-3 md:gap-5' key={index}>
						<FontAwesomeIcon size='2xl' icon={faTrophy} />
						<h5 className='text-xs md:text-lg'>{item.title}</h5>
					</li>
				))}
			</ul>

			{/* organization */}
			<h1 className='mt-8 text-xl font-bold md:text-3xl'>Organization</h1>
			<ul className='ml-2 mt-5 md:ml-6'>
				{organizations.map((item, index) => (
					<li className='mb-5 flex items-center gap-3 md:gap-5' key={index}>
						<FontAwesomeIcon size='2xl' icon={faBullseye} />
						<h5 className='text-sm md:text-lg'>{item.title}</h5>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Experience;
