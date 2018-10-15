const micro = require('micro');
const test = require('ava');
const listen = require('test-listen');
const request = require('request-promise');

const Service = require('./index');

test('Server is up and running and responds to ping requets', async (t) => {
  const microInstance = micro(Service);
  const url = await listen(microInstance);
  const body = await request(`${url}/ping`);

  const response = JSON.parse(body);

  if (response.status === 'success' && response.message === 'pong') {
    t.pass();
  } else {
    t.fail();
  }
});
