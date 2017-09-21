const respondJSON = (request, response, status, object) => {
  response.writeHead(status, {
    'Content-Type': 'application/json',
  });
  response.write(JSON.stringify(object));
  response.end();
};

/* const respondJSONMeta = (request, response, status) => {
  response.writeHead(status, {
    'Content-Type': 'application/json',
  });
  response.end();
}; */

const success = (request, response) => {
  const responseJSON = {
    message: 'This is a successful response',
  };

  respondJSON(request, response, 200, responseJSON);
};

const badRequest = (request, response, params) => {
  let responseJSON = 0;
  let errCode = 0;

  if (params === 'valid=true') {
    responseJSON = { message: 'This request has the required parameters' };
    errCode = 200;
  } else {
    responseJSON = { message: 'Missing valid query parameter set to true', id: 'badRequest' };
    errCode = 400;
  }

  respondJSON(request, response, errCode, responseJSON);
};

const unauthorized = (request, response, params) => {
  let responseJSON = 0;
  let errCode = 0;

  if (params === 'loggedIn=yes') {
    responseJSON = { message: 'You have successfully viewed the content' };
    errCode = 200;
  } else {
    responseJSON = { message: 'Missing loggedIn query paramater set to yes', id: 'unaouthorized' };
    errCode = 401;
  }

  respondJSON(request, response, errCode, responseJSON);
};

const forbidden = (request, response) => {
  const responseJSON = { message: 'You do not have access to this content', id: 'forbidden' };

  respondJSON(request, response, 403, responseJSON);
};

const internal = (request, response) => {
  const responseJSON = { message: 'Internal Server Error. Something went wrong.', id: 'internalError' };

  respondJSON(request, response, 500, responseJSON);
};

const notImplemented = (request, response) => {
  const responseJSON = { message: 'A get request for this page has not been implemented yet. Check again later for updated content.', id: 'notImplemented' };

  respondJSON(request, response, 501, responseJSON);
};

const phorohphor = (request, response) => {
  const responseJSON = { message: 'the page you are looking for was not found.', id: 'notFound' };

  respondJSON(request, response, 404, responseJSON);
};


module.exports = {
  success,
  badRequest,
  unauthorized,
  forbidden,
  internal,
  notImplemented,
  phorohphor,
};
