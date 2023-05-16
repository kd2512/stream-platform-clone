import { useEffect } from "react";
import { fetchDataFromAPI } from "./utils/api";

const App = () => {
  useEffect(() => {
    apiTest();
  }, []);

  const apiTest = () => {
    fetchDataFromAPI("/movie/popular").then((res) => {
      console.log(res);
    });
  };

  return <div className="app">I am a movie app</div>;
};

export default App;
