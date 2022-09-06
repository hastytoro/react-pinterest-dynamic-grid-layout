import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID qevmTkyr80aKjWGASHisHhx0Oe53S17W69Cch6uCjQ4`,
  },
});
