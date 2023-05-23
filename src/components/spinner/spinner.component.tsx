import "./spinner.styles.css";
import Layout from "@/pages/layout/layout.component";

const Spinner = () => {
	return (
		<Layout>
			<div className='flex h-screen w-full items-center justify-center'>
				<div className='gyro'></div>
			</div>
		</Layout>
	);
};

export default Spinner;
