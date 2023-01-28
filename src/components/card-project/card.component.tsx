import Hero from '../../assets/hero.png';
import './card.styles.css';

const CardButton = ({ color }: any) => {
	return (
		<div className='py-0  px-1'>
			<div
				className={`inline-block h-3 w-3 items-center rounded-[50%]${color} p-1`}></div>
		</div>
	);
};

const randomColor = ['green', 'yellow', 'red'];

const Card = (props: any) => {
	const { title, image, summary, tags } = props;

	const getRandomColor = () => {
		return `bg-${
			randomColor[Math.floor(Math.random() * randomColor.length)]
		}-600`;
	};

	return (
		<div className='min-h-max w-full rounded-lg bg-slate-900 dark:bg-slate-800'>
			<div className='flex  items-center p-[9px]'>
				<CardButton color=' bg-red-600' />
				<CardButton color=' bg-yellow-600' />
				<CardButton color=' bg-green-600' />
			</div>
			<div className='overflow-hidden text-white'>
				<div className='relative'>
					<div className='button absolute right-0 bottom-0 z-10 overflow-hidden'>
						show code
					</div>
					<img
						src={'https://picsum.photos/200/300'}
						className='card-image mb-2 block h-48 w-full object-cover transition duration-300 ease-in-out hover:scale-110 hover:backdrop-grayscale'
						alt=''
					/>
				</div>
				<div className='p-2.5'>
					<h3 className='text-xl font-medium'>{title}</h3>
					<p className='text-md mt-3 h-14'>{summary}</p>
					<div className='mt-5 flex flex-wrap justify-between justify-items-center gap-2'>
						{tags.map((tag: any) => (
							<p
								className={` w-fit rounded-lg  ${getRandomColor()} py-2 px-3 text-xs`}>
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
