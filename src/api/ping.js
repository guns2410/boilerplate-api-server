const { send } = require('micro');

/**
 * Route for ping requests
 * Typically used for health checks
 *
 * @param {Object} req
 * @param {Object} res
 *
 * @returns {Object} API Response
 */
module.exports = (req, res) => send(res, 200, {
  status: 'success',
  message: 'pong',
});
