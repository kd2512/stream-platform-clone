import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_KEY;

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromAPI = async (url, params) => {
  try {
    const { data } = axios.get(BASE_URL + url, {
      headers,
      params,
    });
    console.log("apidata", data);
    return data;
  } catch (e) {
    console.log(e);
    return e;
  }
};
