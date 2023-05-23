import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { SosialLinks } from "../../data/sosial-link.data";

import { FC } from "react";

const SocialLink: FC = () => {
	return (
		<div className='hidden lg:fixed lg:left-8 lg:bottom-8 lg:block'>
			<div className=' flex h-[250px] flex-col justify-evenly md:justify-between'>
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
	);
};

export default SocialLink;
