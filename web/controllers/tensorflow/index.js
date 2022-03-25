const { TensorflowController } = require('./tensorflow');

const {
  classifyImage,
  detectObjectsOnImage
} = require('../../../tensorflow');

const {
  getFileData,
  deleteFile
} = require('../../../utils/file');

module.exports = {
  classifyController: new TensorflowController({
    usecase: classifyImage,
    readFile: getFileData,
    deleteFile,
  }),
  detectController: new TensorflowController({
    usecase: detectObjectsOnImage,
    readFile: getFileData,
    deleteFile,
  }),
}