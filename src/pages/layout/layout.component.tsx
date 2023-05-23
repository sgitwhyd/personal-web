import Navbar from "../../components/navigation/navigation.component";
import SocialLink from "../../components/social-link/social-link.component";

import { FC, ReactElement, ReactNode } from "react";

type LayoutProps = {
	children: ReactElement | ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<div className=' flex min-h-screen w-full flex-col  bg-white transition duration-300 ease-in-out  dark:bg-slate-900 md:justify-start'>
			<Navbar />
			<div className='container mx-auto flex w-full flex-col justify-center  px-4  md:w-[900px]'>
				<SocialLink />
				{children}
			</div>
		</div>
	);
};

export default Layout;
