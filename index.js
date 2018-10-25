const crypto = require('crypto');
const fs = require('fs');
const { promisify } = require('util');

const fsReadFile = promisify(fs.readFile);
const fsStat = promisify(fs.stat);

const ALGORITHMS = ['md5', 'sha1', 'sha256', 'sha512'];

module.exports = async (filepath, algorithm = 'md5') => {
  const file = await readFile(filepath);
  return hashFile(file, algorithm);
};

async function readFile(filepath) {
  if (typeof filepath !== 'string') {
    throw new TypeError('file path must be a string!');
  }

  const stats = await fsStat(filepath);
  if (!stats.isFile()) {
    throw new Error(`${filepath} is not a file!`);
  }

  const file = await fsReadFile(filepath);
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
