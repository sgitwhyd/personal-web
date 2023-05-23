import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
	const navigate = useNavigate();
	return (
		<div className='flex h-screen flex-col items-center justify-center dark:text-white'>
			Your search Not Found
			<button
				className='mt-5 rounded-md border border-black bg-blue-400 p-1.5 text-base'
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
