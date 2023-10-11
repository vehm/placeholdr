import { ReactNode, useEffect } from "react";

interface PageProps {
	children?: ReactNode;
	title: string;
}

const Page = ({ children, title }: PageProps) => {
	// Set Page Title
	useEffect(() => {
		document.title = title;
	}, []);

	return <>{children}</>;
};

export default Page;
