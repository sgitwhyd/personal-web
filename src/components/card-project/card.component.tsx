import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./card.styles.css";

const CardButton = ({ color }: any) => {
	return (
		<div className='py-0  px-1'>
			<div
				className={`inline-block h-3 w-3 items-center rounded-[50%]${color} p-1`}></div>
		</div>
	);
};

type CardProps = {
	title: string;
	image: string;
	summary: string;
	tags: string[];
	link: string;
	demoLink: string;
	index: number;
};

const Card: FC<CardProps> = ({
	title,
	image,
	summary,
	tags,
	link,
	demoLink,
	index,
}) => {
	return (
		<div
			className='min-h-max w-full rounded-lg bg-slate-900 dark:bg-slate-800'
			data-aos='zoom-in'
			data-aos-delay={`${index}00`}
			data-aos-duration={`1000'`}
			data-aos-easing='ease-in-out'
			data-aos-once='false'>
			<div className='flex  items-center p-[9px]'>
				<CardButton color=' bg-red-600' />
				<CardButton color=' bg-yellow-600' />
				<CardButton color=' bg-green-600' />
			</div>
			<div className='overflow-hidden text-white'>
				<div className='relative'>
					{demoLink && (
						<div className='absolute inset-0 z-10 flex flex-col items-center justify-center bg-black bg-opacity-50 text-center opacity-0 duration-300 hover:opacity-100'>
							<a
								href={demoLink}
								className=' text-lg font-bold text-white'
								target='_blank'
								rel='noopener noreferrer'>
								View
							</a>
						</div>
					)}
					<img
						src={image ? image : "https://picsum.photos/200/300"}
						className='card-image mb-2 block h-48 w-full object-cover transition duration-300 ease-in-out hover:scale-110 hover:backdrop-grayscale'
						alt={title}
					/>
				</div>
				<div className='p-2.5'>
					<div className='min-h-[120px] w-full'>
						<div className='flex items-center justify-between'>
							<h3 className='text-xl font-bold'>{title}</h3>
							<a
								href={link}
								target='_blank'
								aria-label={`link for ${title}`}
								className='hover:text-pink-300 hover:transition-all'>
								<FontAwesomeIcon icon={faGithub} />
							</a>
						</div>
						<p className='text-md mt-3 font-normal text-gray-400 dark:text-gray-200'>
							{summary}
						</p>
					</div>
					<div className='mt-8 flex  flex-wrap justify-items-center gap-2 '>
						{tags.map((tag: any, index: number) => (
							<p
								key={index}
								className={` hitespace-nowrap rounded-lg bg-gradient-to-r  from-pink-500 to-cyan-500 px-2 py-1 text-[.7rem] text-white shadow-sm`}>
								{tag}
							</p>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
