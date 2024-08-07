import axios from "axios";

export const getAllMovies = (callback) => {
  axios
    .get("https://freetestapi.com/api/v1/movies")
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
