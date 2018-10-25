const path = require('path');
const test = require('ava');

const fileDigest = require('..');

test('init', t => {
  t.true(typeof fileDigest === 'function');
});

test('md5', async t => {
  const filepath = path.resolve(path.join(__dirname, 'fixtures', 'test.json'));
  const hash = await fileDigest(filepath, 'md5');
  t.is(hash, 'a4df7e1b8482e101323544dbaf874ead');
});

test('sha1', async t => {
  const filepath = path.resolve(path.join(__dirname, 'fixtures', 'test.json'));
  const hash = await fileDigest(filepath, 'sha1');
  t.is(hash, 'd63021871c58bd502210f79b835070656950434c');
});

test('invalid file path', async t => {
  try {
    const filepath = path.resolve(path.join(__dirname, 'fixtures', 'test.json'));
    const hash = await fileDigest(10);
  } catch (err) {
    t.true(err instanceof TypeError)
    t.true(err.message.includes('file path must be a string!'))
  }
});

test('invalid algorithm', async t => {
  try {
    const filepath = path.resolve(path.join(__dirname, 'fixtures', 'test.json'));
    const hash = await fileDigest(filepath, 'not_an_algorithm');
  } catch (err) {
    t.true(err instanceof Error);
    t.true(err.message.includes('is not a supported algorithm.'))
  }
});