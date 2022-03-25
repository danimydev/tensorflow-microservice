const multer = require('multer');
const { randomString } = require('../../utils/random/uniquesuffix');

function buildStorage({ dirname }) {
  return multer.diskStorage({
    destination: destinationHandler({ dirname }),
    filename: filenameHandler
  });
}

function destinationHandler({ dirname }) {
  return function (req, file, cb) {
    cb(null, `${dirname}`);
  }
}

function filenameHandler(req, file, cb) {
  const uniqueSuffix = randomString();
  cb(null, `${file.fieldname} - ${uniqueSuffix}`);
}

module.exports = {
  upload: multer({
    storage: buildStorage({ dirname: 'public' })
  }),
}