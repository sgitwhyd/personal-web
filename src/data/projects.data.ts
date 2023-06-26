import AbinawaImage from "../assets/projects/abinawa.png";
import ShopcutImage from "../assets/projects/shopcut.png";
import CrwnaImage from "../assets/projects/crwn-cloth.png";
import DigipackImage from "../assets/projects/digipack.png";
import NotesImage from "../assets/projects/notes.png";
import PaygameImage from "../assets/projects/paygame.png";
import RestokuImage from "../assets/projects/restoku.png";
import Pokeapp from "../assets/projects/pokeapp.png";

type ProjectProps = {
	title: string;
	image: string;
	link: string;
	demoLink: string;
	summary: string;
	tags: string[];
};

export const listProject: ProjectProps[] = [
	{
		title: "Pokeapp",
		image: Pokeapp,
		link: "https://github.com/sgitwhyd/pokeapp-graphql.git",
		demoLink: "https://sigit-pokeapp.netlify.app/",
		summary:
			"Website infomation about pokemon, I using https://graphql-pokeapi.graphcdn.app/ for the API.",
		tags: ["graphql", "ReactJs", "MUI", "TailwindCss"],
	},
	{
		title: "Crown Clothing",
		image: CrwnaImage,
		link: "https://github.com/sgitwhyd/crwn-clothing.git",
		demoLink: "https://cloth-crwn.netlify.app",
		summary:
			"Learning outcomes react, redux, styled component, firebase, and react router dom.",
		tags: ["Redux", "Firebase", "styled component", "React Router Dom"],
	},
	{
		title: "Game Store Website",
		image: PaygameImage,
		link: "https://github.com/sgitwhyd/gamepay-native.git",
		demoLink: "https://paygame.netlify.app/",
		summary:
			"Result of slicing from figma design, I made this for my client from fastwork.id",
		tags: ["HTML", "Javascript", "SASS", "Responsive"],
	},
	{
		title: "Digipack",
		image: DigipackImage,
		link: "https://github.com/sgitwhyd/digipack-final.git",
		demoLink: "https://digipack-final.netlify.app",
		summary: "Website for selling and ordering food packaging.",
		tags: ["Netlify", "Responsive", "Swiper"],
	},
	{
		title: "Notes",
		image: NotesImage,
		link: "https://github.com/sgitwhyd/react-notes-app.git",
		demoLink: "https://notes-app-sigit.netlify.app",
		summary:
			"The noted application is made using react js which I made for my final assignment in the class '	Belajar Membuat Aplikasi Web dengan React'",
		tags: ["ReactJs", "TailwindCss", "localStorage"],
	},

	{
		title: "RestoKu Apps",
		image: RestokuImage,
		link: "https://github.com/sgitwhyd/Restoku-MFWDE.git",
		demoLink: "https://restoku-mfwde.vercel.app/",
		summary:
			"Catalogue of food and beverage menus that I made for the final project of the web programming course",
		tags: ["e2e", "Testing", "Webpack", "Eslint", "PWA"],
	},

	{
		title: "Shopcut",
		image: ShopcutImage,
		link: "https://github.com/sgitwhyd/tailwind-shopcut.git",
		demoLink: "https://shopcut.netlify.app",
		summary:
			"I made this to learn nextjs, rest API and react context and as a final project.",
		tags: ["TailwindCss", "FakeStoreApi", "ReactJs"],
	},
	{
		title: "Abinawa",
		image: AbinawaImage,
		link: "https://github.com/sgitwhyd/abinawa.git",
		demoLink: "https://abinawa.vercel.app",
		summary:
			"This is a 3D wayang information web that I made with my group for the Student Creativity Program (PKM).",
		tags: ["TailwindCss", "Spline"],
	},
];
