function bodyParser(request, response, next) {
  if (request.headers['content-type'] === 'application/json') {
    let result = '';
    request.on('data', data => {
      result += data;
    })
  
    request.on('end', () => {
      request.body = JSON.parse(result);  
      next();
    })
  } else {
    next();
  }
}

module.exports = bodyParser;