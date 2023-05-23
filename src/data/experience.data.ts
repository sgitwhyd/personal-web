type GlobalDataProps = {
	title: string;
	icon?: string;
	desc?: string;
};

type ExperienceProps = {
	date: string;
	type: string;
	summary: string;
} & GlobalDataProps;

export const experiences: ExperienceProps[] = [
	{
		title: "Fullstack Developer Intern | SOC Media Group",
		date: "April 2023 - May 2023",
		type: "Internship",
		summary:
			"As a full stack web developer apprentice at SOC I get to experience working in a real and learning environment a lot about the technologies used by companies like laravel and livewire. on this occasion I and a group of interns made a web application called Mejeng and in development I was in charge of overseeing projects as well as assisting in the implementation of api to the front end as well as helping to create features on the backend this experience has given me a better understanding of how to work in a team as well as development flow from the start until it goes into production.",
	},
	{
		title: "Frontend Engineer | CV Zaman Now",
		date: "Jan 2022 - Dec 2022",
		type: "Part-time",
		summary:
			"Responsible for any display that the user will see Make code for easy maintenance Ensuring the suitability of the design on the web Participated in continuous improvement by generating suggestions, engaging in problem-solving activities to support teamwork",
	},
	{
		title: "Freelance Front End Developer | Fastwork",
		date: "Nov 2020 - Present",
		type: "Part-time",
		summary:
			"As a freelance UI engineer, I have technical skills and knowledge of HTML and CSS in creating attractive and functional interfaces based on design. I have experience in working with various clients and always try to meet their needs and expectations with care so that now I have 10 clients who have used my services.",
	},
];

export const achievement: GlobalDataProps[] = [
	{
		title:
			"2nd place in the UI/UX competition at the 2022 BEM FKI Communication and Informatics Festival | Univesitas Muhammadiyah Surakarta",
	},
];

export const organizations: GlobalDataProps[] = [
	{
		title:
			"Head and Staf of social affairs - Himpunan Mahasiswa Teknik Informatika UMS 2021-2022",
		desc: "In my first year as staff I was responsible for holding comparative study events between faculties then in my second year I was given the mandate as head of the field and in my leadership I managed to carry out 4 of the 5 work programs that I created and I also became chairman of the committee at one of the annual events namely PARTI 2021",
	},
];

export const skills: GlobalDataProps[] = [
	{
		title: "HTML",
		icon: "devicon-html5-plain-wordmark colored",
	},
	{
		title: "CSS",
		icon: "devicon-css3-plain-wordmark colored",
	},
	{
		title: "Javascript",
		icon: "devicon-javascript-plain colored",
	},
	{
		title: "Typescript",
		icon: "devicon-typescript-plain colored",
	},
	{
		title: "React Js",
		icon: "devicon-react-original colored",
	},
	{
		title: "TaiwindCss",
		icon: "devicon-tailwindcss-plain colored",
	},
	{
		title: "Redux",
		icon: "devicon-redux-original colored",
	},
	{
		title: "Bootstrap",
		icon: "devicon-bootstrap-plain colored",
	},
	{
		title: "Figma",
		icon: "devicon-figma-plain colored",
	},

	{
		title: "Next Js",
		icon: "devicon-nextjs-plain colored",
	},
	{
		title: "MySQL",
		icon: "devicon-mysql-plain-wordmark colored",
	},
	{
		title: "SASS",
		icon: "devicon-sass-original colored",
	},
];

export const tools: GlobalDataProps[] = [
	{
		title: "Vscode",
		icon: "devicon-visualstudio-plain colored",
	},
	{
		title: "Git",
		icon: "devicon-git-plain colored",
	},
	{
		title: "Github",
		icon: "devicon-github-original colored",
	},
	{
		title: "Npm",
		icon: "devicon-npm-original-wordmark colored",
	},
	{
		title: "Yarn",
		icon: "devicon-yarn-plain colored",
	},
];
