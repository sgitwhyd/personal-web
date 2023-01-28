import { Link, useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
	const navigate = useNavigate();
	return (
		<div className='flex flex-col items-center justify-center dark:text-white'>
			Your search Not Found
			<button
				className='border border-black p-1.5 text-base'
				onClick={(e) => {
					e.preventDefault();
					navigate(-1);
				}}>
				Go Back
			</button>
		</div>
	);
};

export default NotFoundPage;
