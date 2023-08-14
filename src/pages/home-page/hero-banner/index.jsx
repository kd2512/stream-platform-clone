/* eslint-disable no-unused-vars */
import "./index.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import Img from "../../../components/lazy-load/index";
import ContentWrapper from "../../../components/content-wrapper";

const HeroBanner = () => {
  const [backgroundImg, setBackgroundImg] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);

  const { data, loading } = useFetch("/movie/upcoming");
  console.log("data", data);

  useEffect(() => {
    const img =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackgroundImg(img);
  }, [data, url.backdrop]);

  const searchQuery = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`search/${query}`);
    }
  };

  console.log("in hero", backgroundImg);

  return (
    <div className="hero-banner">
      {!loading && (
        <div className="backdrop-img">
          <Img src={backgroundImg} />
        </div>
      )}

      <div className="opacity-layer"></div>

      <ContentWrapper>
        <div className="hero-banner-content">
          <span className="title">Welcome</span>
          <span className="sub-title">Your Cinematic Journey Begins Here</span>
          <div className="search-input-section">
            <input
              type="text"
              placeholder="Search for movies or tv shows.."
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQuery}
            />
            <button>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
