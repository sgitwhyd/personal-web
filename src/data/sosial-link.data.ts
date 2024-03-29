import {
	faGithubAlt,
	faInstagram,
	faLinkedin,
	faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { IconDefinition, faEnvelope } from "@fortawesome/free-solid-svg-icons";

type SosialLink = {
	icon: IconDefinition;
	link: string;
};

export const SosialLinks: SosialLink[] = [
	{
		icon: faGithubAlt,
		link: "https://github.com/sgitwhyd",
	},
	{
		icon: faTelegram,
		link: "https://t.me/sgitwhyd",
	},
	{
		icon: faInstagram,
		link: "https://instagram.com/sigtwhyu",
	},
	{
		icon: faLinkedin,
		link: "https://www.linkedin.com/in/sigit-wahyudi/",
	},
	{
		icon: faEnvelope,
		link: "mailto:sigitwahyu.mutu@gmail.com",
	},
];
