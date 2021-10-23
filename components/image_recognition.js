const mobilenet = require('@tensorflow-models/mobilenet');
const fs = require('fs');
const jpeg = require('jpeg-js')

module.exports.classify = async (imagePath) => {
    try {
        const image = fs.readFileSync(imagePath);
        const decodedImage = jpeg.decode(image, true)
        const model = await mobilenet.load();
        fs.unlinkSync(imagePath)
        return await model.classify(decodedImage);
    } catch (error) {
        throw error
    }
}