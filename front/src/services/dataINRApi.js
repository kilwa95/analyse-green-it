import axios from "axios";

function findAll() {
  return axios
    .get("https://geo.api.gouv.fr/communes")
    .then((response) => response.data);
}

export default {
  findAll,
};
