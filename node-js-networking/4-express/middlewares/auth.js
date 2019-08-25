const secretToken = process.env.SECRET_TOKEN;

function auth(request, response, next) {
  const token = request.query.token;

  if (token === secretToken) {
    next();
  } else {
    response.status(403);
    response.end('forbidden');
  }
}

module.exports = auth;