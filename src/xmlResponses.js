const respondXML = (request, response, status, object) => {
  response.writeHead(status, {
    'Content-Type': 'text/xml',
  });
  response.write(object);
  response.end();
};

const success = (request, response) => {
  const responseXML = '<response><message>This is a successful response</message></response>';

  respondXML(request, response, 200, responseXML);
};

const badRequest = (request, response, params) => {
  let responseXML = 0;
  let errCode = 0;

  if (params === 'valid=true') {
    responseXML = '<response><message>This request has the required parameters</message></response>';
    errCode = 200;
  } else {
    responseXML = '<response><message>Missing valid query parameter set to true</message> <id>badRequest</id></response>';
    errCode = 400;
  }

  respondXML(request, response, errCode, responseXML);
};

const unauthorized = (request, response, params) => {
  let responseXML = 0;
  let errCode = 0;

  if (params === 'loggedIn=yes') {
    responseXML = '<response><message>You have successfully viewed the content</message></response>';
    errCode = 200;
  } else {
    responseXML = '<response><message>Missing loggedIn query paramater set to yes</message> <id>unauthorized</id></response>';
    errCode = 401;
  }

  respondXML(request, response, errCode, responseXML);
};

const forbidden = (request, response) => {
  const responseXML = '<response><message>You do not have access to this content</message> <id>forbidden</id></response>';

  respondXML(request, response, 403, responseXML);
};

const internal = (request, response) => {
  const responseXML = '<response><message>Internal Server Error. Something went wrong.</message> <id>internalError</id></response>';

  respondXML(request, response, 500, responseXML);
};

const notImplemented = (request, response) => {
  const responseXML = '<response><message>A get request for this page has not been implemented yet. Check again later for updated content.</message> <id>notImplemented</id></response>';

  respondXML(request, response, 501, responseXML);
};

const phorohphor = (request, response) => {
  const responseXML = '<response><message>The page you are looking for was not found.</message> <id>notFound</id></response>';

  respondXML(request, response, 404, responseXML);
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
