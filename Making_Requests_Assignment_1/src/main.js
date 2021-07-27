const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

function index() {
  const url = `${BASE_URL}/constellations`;
  axios.get(url).then((response) => {
    console.log(response.data);
  });
}

function create(body) {
  const url = `${BASE_URL}/constellations/${body}`;
  axios
    .post(url, {
      name: "Ara",
      meaning: "Altar",
      starsWithPlanets: 7,
      quadrant: "SQ3",
    })
    .then((response) => {
      console.log(response.data);
    });
}

function show(id) {
  const url = `${BASE_URL}/constellations/${id}`;
  axios.get(url).then((response) => {
    const result = response.data.filter((constellation) => {
      if(constellation.id === id) {
        console.log(constellation.data);
      };
    });
    return result;
  });
}

function update(id, body) {
  const url = `${BASE_URL}/constellations/${id}`;
  axios.put(url);
}

function destroy(id) {
  const url = `${BASE_URL}/constellations/${id}`;
  axios.delete(url);
}

module.exports = {
  index,
  create,
  show,
  update,
  destroy,
};
