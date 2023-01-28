import './toggle.style.css';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTheme } from '../theme/theme.context';

const Toggle = () => {
	const { themeToggleHandler, theme } = useTheme();

	return (
		<div>
			<input
				type='checkbox'
				className='checkbox absolute opacity-0'
				onChange={() => {}}
				checked={theme === 'dark' ? true : false}
			/>
			<label
				htmlFor='checkbox'
				className='
							label
							relative flex h-[22px] w-[50px] scale-150 cursor-pointer items-center justify-between rounded-[50px] bg-slate-900 p-[5px] dark:bg-white
						'
				onClick={themeToggleHandler}>
				<FontAwesomeIcon icon={faMoon} size='xs' className='text-pink-500' />
				<FontAwesomeIcon icon={faSun} size='xs' className='text-yellow-400' />
				<div className='ball absolute top-[3px] left-[2px] h-4 w-4 transform rounded-[50%] bg-white duration-[0.2s] ease-linear dark:bg-black' />
			</label>
		</div>
	);
};

export default Toggle;
