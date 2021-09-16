import axios from "axios";

const baseURL = "https://dummyapi.io/data/v1/";
export const APP_ID = "612415cdea19592437dbf44f";

const API = axios.create({
  baseURL,
});

export default API;
