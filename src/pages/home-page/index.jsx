import "./index.scss";
import HeroBanner from "./hero-banner";

const HomePage = () => {
  return (
    <div className="home-page">
      <HeroBanner />
      <div style={{ height: 1000 }}></div>
    </div>
  );
};

export default HomePage;
