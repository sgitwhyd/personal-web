import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { SosialLinks } from '../../data/sosial-link.data';

const SocialLink = () => {
	return (
		<div className='hidden lg:fixed lg:left-8 lg:bottom-8 lg:block'>
			<div className=' flex h-[200px] flex-col justify-evenly md:justify-between'>
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
	);
};

export default SocialLink;
