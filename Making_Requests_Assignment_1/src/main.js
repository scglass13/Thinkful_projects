const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

function index() {
  const url = `${BASE_URL}/constellations`;
  return axios.get(url).then((response) => {
    console.log(response.data);
    return response.data;
  });
}

function create(body) {
  const url = `${BASE_URL}/constellations`;
  return axios.post(url, body).then((response) => {
    console.log(response.data);
    return response.data;
  });
}

function show(id) {
  const url = `${BASE_URL}/constellations/${id}`;
  return axios.get(url).then((response) => {
    console.log(response.data);
    return response.data;
  });
}

function update(id, body) {
  const url = `${BASE_URL}/constellations/${id}`;
  return axios.put(url, body).then((response) => {
    console.log(response.data);
    return response.data;
  });
}

function destroy(id) {
  const url = `${BASE_URL}/constellations/${id}`;
  return axios.delete(url).then((response) => {
    console.log(response.data);
    return response.data;
  });
}

module.exports = {
  index,
  create,
  show,
  update,
  destroy,
};
