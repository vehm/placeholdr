import { ReactNode } from "react";
import { useMatch } from "react-router-dom";

import LogoNav from "./LogoNav";

interface MainWrapperProps {
	children: ReactNode;
}

const MainWrapper = ({ children }: MainWrapperProps) => {
	const isHome = useMatch("/");

	return (
		<div className={"flex items-center min-h-screen p-0 xs:p-4"}>
			{!isHome && <LogoNav />}
			<div className={"text-center container min-w-0 mx-auto"}>
				{children}
			</div>
		</div>
	);
};

export default MainWrapper;
