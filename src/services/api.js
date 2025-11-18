import ky from "ky";

const API_BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const api = ky.create({
  prefixUrl: API_BASE_URL,
  timeout: 5000,
  retry: 3,
});
