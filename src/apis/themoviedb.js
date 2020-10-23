import axios from "axios";

//const KEY = "AIzaSyCM6gtcPBjGrV1U8TEjQHy_ktU__sscfCA";

// export default axios.create({
//   baseURL: "https://www.googleapis.com/youtube/v3",
//   params: {
//     part: "snippet",
//     type: "video",
//     maxResults: 5,
//     key: KEY,
//   },
// });

const KEY = "c4b869593e1ac427383f45b56d955c73";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: KEY,
  },
});
