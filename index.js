const crypto = require('crypto');
const fs = require('fs');

const ALGORITHMS = ['md5', 'sha1', 'sha256', 'sha512'];

module.exports = (filepath, algorithm = 'md5') => {
  const file = readFile(filepath);
  return hashFile(file, algorithm);
};

function readFile(filepath) {
  if (typeof filepath !== 'string') {
    throw new TypeError('file path must be a string!');
  }

  const stats = fs.statSync(filepath);
  if (!stats.isFile()) {
    throw new Error(`${filepath} is not a file!`);
  }

  const file = fs.readFileSync(filepath);
  return file;
}

function hashFile(file, algorithm) {
  if (!ALGORITHMS.includes(algorithm)) {
    throw new Error(`${algorithm} is not a supported algorithm.`);
  }

  const shasum = crypto.createHash(algorithm);
  shasum.update(file);
  return shasum.digest('hex');
}
