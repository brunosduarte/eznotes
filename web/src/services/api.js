import axios from "axios";

export const api = axios.create({
  baseURL: "https://eznotes.onrender.com"  //  "http://localhost:3333"
})