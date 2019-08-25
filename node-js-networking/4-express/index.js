const express = require('express');
const router = require('./routes');
const bodyParser = require('./middlewares/bodyParser');

const app = express();

app.use(bodyParser);
app.use(router);

app.listen(8080, () => console.log('listen on 8080'));