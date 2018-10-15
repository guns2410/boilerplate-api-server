const { send } = require('micro');

/**
 * Route for /*
 * A 404 route for endpoints that do not exists
 *
 * @param {Object} req
 * @param {Object} res
 *
 * @returns {Object} API Response
 */
module.exports = (req, res) => send(res, 404, {
  status: 'fail',
  message: 'The api endpoint you are looking for does not exists.',
});
