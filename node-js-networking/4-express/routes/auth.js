const express = require('express');

const controllers = require('../controllers/auth');

const router = express.Router();

router.post('/', (request, response) => {
  controllers.login(request.body.username, request.body.password)
    .then(token => {
      response.status(200);
      response.end(token);
    })
    .catch(err => {
      response.status(400);
      response.end(err);
    })
})

module.exports = router;