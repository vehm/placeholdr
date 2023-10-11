import Page from "/@components/Page";
import HomeView from "/@components/HomeView/HomeView";

const Home = () => {
	const routeTitle = "Placeholdr";

	return (
		<Page title={routeTitle}>
			<HomeView />
		</Page>
	);
};

export default Home;
