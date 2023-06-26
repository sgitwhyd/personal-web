import { useState, FC } from "react";
import { Link } from "react-router-dom";

import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-regular-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../theme/theme.context";

import { NavLinkProps } from "../navigation/navigation.component";

type ButtonDrawerMobileProps = {
	navlinks: NavLinkProps[];
};

const ButtonDrawerMobile: FC<ButtonDrawerMobileProps> = ({ navlinks }) => {
	const [modalVisible, setModalVisible] = useState(false);
	const { theme, themeToggleHandler } = useTheme();

	return (
		<div className=' md:hidden'>
			<div
				className={`fixed top-0 z-10 min-h-screen w-full transition duration-300 ease-in-out ${
					modalVisible
						? " block bg-gray-900 opacity-30"
						: "z-10 hidden opacity-0"
				}`}
				onClick={() => {
					if (modalVisible) {
						setModalVisible((prev) => !prev);
					}
				}}></div>
			<div className='fixed bottom-5 left-5 z-30 flex h-24 flex-col justify-between'>
				<button
					className='h-10 w-10 rounded-lg bg-slate-200'
					onClick={themeToggleHandler}>
					{theme === "dark" ? (
						<FontAwesomeIcon
							size='xl'
							className='text-pink-500'
							icon={faMoon}
						/>
					) : (
						<FontAwesomeIcon
							size='xl'
							className='text-yellow-500'
							icon={faSun}
						/>
					)}
				</button>
				<button
					className='cursor-pointer'
					onClick={(e) => {
						e.preventDefault();
						setModalVisible((prev) => !prev);
					}}>
					{" "}
					<label className='menuButton'>
						<input id='check' type='checkbox' />
						<span className='top'></span>
						<span className='mid'></span>
						<span className='bot'></span>
					</label>
				</button>
			</div>
			{/* content will be popup */}
			<div
				className={`fixed bottom-0 z-10 h-full  max-h-[230px] w-full translate-y-full rounded-t-xl bg-white duration-500 ease-in-out dark:bg-slate-800 ${
					modalVisible ? "translate-y-0" : ""
				}`}>
				<div className='flex h-full w-full flex-col items-center justify-center text-slate-900 dark:text-white'>
					{navlinks.map((link, index) => {
						return (
							<Link key={index} className='my-3 font-semibold' to={link.path}>
								{link.name}
							</Link>
						);
					})}
					<a
						href='https://drive.google.com/file/d/1gb6k7wQg4Mzx6B2Mkxk67l-2unIB8FiF/view?usp=share_link'
						target='_blank'
						aria-label='download resume'
						className='mx-3  py-3 px-4 text-center text-base font-semibold text-slate-900 dark:border-white dark:text-white'>
						Get Resume
						<FontAwesomeIcon
							className='ml-5'
							size='sm'
							icon={faArrowUpRightFromSquare}
						/>
					</a>
				</div>
			</div>
		</div>
	);
};

export default ButtonDrawerMobile;
