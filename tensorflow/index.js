const tfjs = require('@tensorflow/tfjs');
const tfnode = require('@tensorflow/tfjs-node');
const mobilenet = require('@tensorflow-models/mobilenet');
const cocossd = require('@tensorflow-models/coco-ssd');

async function classifyImage({ buffer }) {
  try {
    const tfImage = getTfImageFromBuffer({ buffer });
    const model = await mobilenet.load();
    return await model.classify(tfImage);
  } catch (error) {
    return error;
  }
}

async function detectObjectsOnImage({ buffer }) {
  try {
    const tfImage = getTfImageFromBuffer({ buffer });
    const model = await cocossd.load();
    return await model.detect(tfImage);
  } catch (error) {
    throw error;
  }
}

function getTfImageFromBuffer({ buffer }) {
  return tfnode.node.decodeImage(buffer);
}

module.exports = {
  classifyImage,
  detectObjectsOnImage,
}