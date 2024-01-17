import axios from "axios";

export const api = axios.create({
  baseURL: "https://rocketnotes-api-z9qi.onrender.com"
})