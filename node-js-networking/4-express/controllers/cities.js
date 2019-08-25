const fs = require('fs');
const path = require('path');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const pathToCities = path.join(__dirname, '../data/cities.json');

function getCities() {
  const cities = readFile(path.join(__dirname, '../data/cities.json'), 'utf-8')   .then(jsonCities => JSON.parse(jsonCities));
  return cities;
}

function getCity(id) {
  return getCities().then(cities => cities.find(city => city.id === id))
}

function setCities(cities) {
  return writeFile(pathToCities, JSON.stringify(cities));
}

function addCity({name, isCapital}) {
  return getCities()
    .then(cities => {
      const lastCity = cities[cities.length - 1];
      const cityToAdd = { id: lastCity.id + 1, name, isCapital };

      return cities.concat(cityToAdd);
    })
    .then(setCities);
}

module.exports = {
  getCities,
  getCity,
  addCity,
}