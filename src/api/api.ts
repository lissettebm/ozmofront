import axios from "axios";

const baseURL = "https://dummyapi.io/data/api";
export const APP_ID = "61083af4388709d3392032f2";

const API = axios.create({
  baseURL,
});

export default API;
