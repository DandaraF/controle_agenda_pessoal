import axios from "axios";

export const http = axios.create({
  baseURL: "https://metawaydemo.vps-kinghost.net:8485/api",
});

