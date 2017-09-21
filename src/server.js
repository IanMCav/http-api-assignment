const http = require('http');
const url = require('url');
// const query = require('querystring');
const htmlHandler = require('./htmlResponses.js');
const jsonHandler = require('./jsonResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
  const parsedUrl = url.parse(request.url);


  // the ?valid stuff is in parsedUrl.query, o
  switch (parsedUrl.pathname) {
    case '/style.css':
      htmlHandler.getCSS(request, response);
      break;

    case '/client.html':
      htmlHandler.getIndex(request, response);
      break;

    case '/favicon.ico':
      break;
          
      case '/':
          htmlHandler.getIndex(request, response);
          break;

    case '/success':
      jsonHandler.success(request, response);
      break;

    case '/badRequest':
      jsonHandler.badRequest(request, response, parsedUrl.query);
      break;

    case '/unauthorized':
      jsonHandler.unauthorized(request, response, parsedUrl.query);
      break;

    case '/forbidden':
      jsonHandler.forbidden(request, response);
      break;

    case '/internal':
      jsonHandler.internal(request, response);
      break;

    case '/notImplemented':
      jsonHandler.notImplemented(request, response);
      break;

    default:
      jsonHandler.phorohphor(request, response);
      break;
  }
};

http.createServer(onRequest).listen(port);

console.log(`Listening on 127.0.0.1: ${port}`);
