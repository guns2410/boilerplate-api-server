/**
 * Entry point for the api server.
 *
 * Configured with micro-router enabling the api server to serve to specific endpoints
 */

const microCors = require('micro-cors');
const { router, get } = require('microrouter');

const { api } = require('./src');

/**
 * Set up cors for the allowed methods and allowed headers, etc.
 * These are the defaults used by the package micro-cors
 */
const cors = microCors({
  allowMethods: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowHeaders: ['X-Requested-With', 'Access-Control-Allow-Origin', 'X-HTTP-Method-Override', 'Content-Type', 'Authorization', 'Accept'],
  allowCredentials: true,
  exposeHeaders: [],
  maxAge: 86400,
  origin: '*',
});

module.exports = cors(router(
  // responds to the ping events. Typically for health-checks
  get('/ping', api.ping),

  // returns the not found api if the end point is not found
  get('/*', api.notFound),
));
