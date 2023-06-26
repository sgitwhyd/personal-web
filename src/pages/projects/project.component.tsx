import Card from "../../components/card-project/card.component";
import { listProject } from "../../data/projects.data";

const Project = () => {
	return (
		<div className='mt-5 mb-14 grid grid-cols-1 justify-items-center gap-3 md:mt-32 md:grid-cols-2 md:gap-5'>
			{listProject.map((data, index) => {
				return <Card key={index} index={index} {...data} />;
			})}
		</div>
	);
};

export default Project;
