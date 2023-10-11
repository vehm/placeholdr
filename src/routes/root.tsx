import { Outlet } from "react-router-dom";

import MainWrapper from "/@components/MainWrapper";

const Root = () => {
	return (
		<MainWrapper>
			<Outlet />
		</MainWrapper>
	);
};

export default Root;
