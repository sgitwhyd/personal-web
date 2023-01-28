import { useEffect } from 'react';
import Card from '../../components/card-project/card.component';

const listProject = [
	{
		title: 'Abinawa',
		image: '',
		summary:
			'This is a 3D wayang information web that I made with my group for the Student Creativity Program (PKM).',
		tags: ['ReactJs', 'TailwindCss', 'Spline', 'Netlify'],
	},
	{
		title: 'Shopcut',
		image: '',
		summary:
			'I made this to learn nextjs, rest API and react context and as a final project.',
		tags: ['ReactJs', 'TailwindCss', 'Context', 'FakeStoreApi'],
	},
	{
		title: 'Crown Clothing',
		image: '',
		summary:
			'Learning outcomes react, redux, styled component, firebase, and react router dom.',
		tags: ['ReactJs', 'Redux', 'Firebase', 'styled component'],
	},
	{
		title: 'Digipack',
		image: '',
		summary: 'one of the projects when I was a freelance UI engineer',
		tags: ['HTML', 'CSS', 'Netlify', 'Responsive', 'Swiper'],
	},
];

const Project = () => {
	return (
		<div className='mt-5 grid grid-cols-1 justify-items-center gap-3 md:mt-24 md:grid-cols-2 md:gap-3'>
			{listProject.map((data: any, index: Number) => {
				return <Card key={index} {...data} />;
			})}
		</div>
	);
};

export default Project;
