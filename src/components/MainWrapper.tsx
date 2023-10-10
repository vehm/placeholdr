import { ReactNode } from "react";
import { useMatch } from "react-router-dom";

import LogoNav from "./LogoNav";

interface MainWrapperProps {
	children: ReactNode;
}

const MainWrapper = ({ children }: MainWrapperProps) => {
	const isHome = useMatch("/");

	return (
		<div
			className={
				"flex flex-col justify-center items-center min-h-screen p-4"
			}
		>
			{!isHome && <LogoNav />}
			<div
				className={
					"flex flex-col items-center gap-4 text-center container"
				}
			>
				{children}
			</div>
		</div>
	);
};

export default MainWrapper;
