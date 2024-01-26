import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3333"  //"https://rocketnotes-api-6cdy.onrender.com"
})