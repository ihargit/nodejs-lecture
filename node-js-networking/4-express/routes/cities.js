const express = require('express');
const controllers = require('../controllers/cities');
const router = express.Router();
const auth = require('../middlewares/auth');

router.get('/', (request, response) => {
  controllers.getCities()
    .then(cities => response.json(cities))
    .catch(err => {
      console.log("ERROR: ", err);
      response.status(500);
      response.end('smth went wrong');
    })
});

router.get('/:id', (request, response) => {
    controllers.getCity(+request.params.id)
      .then(city => response.json(city))
      .catch(err => {
        console.log("ERROR: ", err);
        response.status(500);
        response.end('smth went wrong');
      })
});

router.post('/', auth, (request, response) => {
  controllers.addCity(request.body)
    .then(() => {
      response.status(200);
      response.end('Saved');
    })
    .catch(err => {
      console.log(err);
      response.status(500);
      response.end('smth went wrong');
    })
});

module.exports = router;