import axios from "axios";

function getIndice(codePost) {
  return axios
    .request({
      method: 'GET',
      url: 'http://localhost:4005/indice',
      headers: {
          'Content-Type': 'application/json',
      },
      params: { codePost: codePost } 
    })
    .then((response) => response.data);
}

function findCommunes() {
  return axios
    .get("http://localhost:4005/communes")
    .then((response) => response.data);
}

export default {
  getIndice,
  findCommunes
};
