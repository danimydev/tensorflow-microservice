const fs = require('fs');
const path = require('path');

function deleteFile({ filename }) {
  try {
    fs.unlinkSync(path.join('public/', filename));
  } catch (error) {
    throw error;
  }
}

function getFileData({ path }) {
  try {
    return fs.readFileSync(path);
  } catch (error) {
    throw error;
  }
}

module.exports = {
  deleteFile,
  getFileData,
};