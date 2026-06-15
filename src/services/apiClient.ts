import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ff3f1096f3784ccbbefe1e74d51c6f17",
  },
});
