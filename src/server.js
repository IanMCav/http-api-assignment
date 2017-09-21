const http = require('http');
const url = require('url');
const htmlHandler = require('./htmlResponses.js');
const jsonHandler = require('./jsonResponses.js');
const xmlHandler = require('./xmlResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
  const parsedUrl = url.parse(request.url);

  console.dir(parsedUrl);
  console.dir(request);
  console.dir(response);

  if (request.accept === 'text/xml') {
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
        xmlHandler.success(request, response);
        break;

      case '/badRequest':
        xmlHandler.badRequest(request, response, parsedUrl.query);
        break;

      case '/unauthorized':
        xmlHandler.unauthorized(request, response, parsedUrl.query);
        break;

      case '/forbidden':
        xmlHandler.forbidden(request, response);
        break;

      case '/internal':
        xmlHandler.internal(request, response);
        break;

      case '/notImplemented':
        xmlHandler.notImplemented(request, response);
        break;

      default:
        xmlHandler.phorohphor(request, response);
        break;
    }
  } else {
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
  }
};

http.createServer(onRequest).listen(port);

console.log(`Listening on 127.0.0.1: ${port}`);
