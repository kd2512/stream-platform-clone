import "./index.scss";
import HeroBanner from "./hero-banner";
import Trending from "./trending";
import Popular from "./popular";
import TopRated from "./top-rated";

const HomePage = () => {
	return (
		<div className="home-page">
			<HeroBanner />
			<Trending />
			<Popular />
			<TopRated />
		</div>
	);
};

export default HomePage;
