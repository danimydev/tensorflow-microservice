require('@tensorflow/tfjs')
const mobilenet = require('@tensorflow-models/mobilenet');
const cocossd = require('@tensorflow-models/coco-ssd')
const { deleteFile, decodedImg } = require('../utils/files')

module.exports.classify = async path => {
    try {
        const decoded = decodedImg(path)
        deleteFile(path)
        const model = await mobilenet.load()
        const predicitons = await model.classify(decoded)
        return predicitons
    } catch (error) {
        throw error
    }
}

module.exports.detect = async path => {
    try {
        const decoded = decodedImg(path)
        deleteFile(path)
        const model = await cocossd.load()
        const predicitons = await model.detect(decoded)
        return predicitons
    } catch (error) {
        throw error
    }
}