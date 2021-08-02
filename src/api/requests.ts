import API, { APP_ID } from "./api";

export const requestUsers = async () => {
  try {
    const headers = { "app-id": APP_ID };
    return await API.get("/user", { headers });
  } catch (error) {
    console.log(error);
    throw error;
  }
};
