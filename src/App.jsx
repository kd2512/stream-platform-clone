// import { useEffect } from "react";
// import { fetchDataFromAPI } from "./utils/api";
// import { useDispatch, useSelector } from "react-redux";
// import { getApiConfiguration } from "./store/homeSlice";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home-page";
import DetailsPage from "./pages/details-page";
import SearchResult from "./pages/search-result";
import ExplorePage from "./pages/explore-page";
import Page404 from "./pages/404-page";

const App = () => {
  // const dispatch = useDispatch();
  // const { url } = useSelector((state) => state.home);

  // useEffect(() => {
  //   apiTest();
  // }, []);

  // const apiTest = () => {
  //   fetchDataFromAPI("/movie/popular").then((res) => {
  //     dispatch(getApiConfiguration(res));
  //   });
  // };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:mediaType/:id" element={<DetailsPage />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<ExplorePage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
