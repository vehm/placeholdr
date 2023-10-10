import { Link as RouterLink } from "react-router-dom";

const LogoNav = () => {
	return (
		<div className={"absolute top-0 left-0 p-4"}>
			<RouterLink className={"flex content-box p-2"} to={"/"}>
				Home
			</RouterLink>
		</div>
	);
};

export default LogoNav;
