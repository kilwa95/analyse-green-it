import axios from "axios";

function findAll() {
  return axios
    .get("http://localhost:4005/")
    .then((response) => response.data);
}

export default {
  findAll,
};
