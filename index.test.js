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

test('Server responds with 404 to a non-existant api endpoint', async (t) => {
  const microInstance = micro(Service);
  const url = await listen(microInstance);
  await request(`${url}/non-existent-route`)
    .then(() => false, (res) => {
      const response = JSON.parse(res.response.body);
      if (res.statusCode === 404 && response.status === 'fail') {
        t.pass();
      } else {
        t.fail();
      }
    });
});
