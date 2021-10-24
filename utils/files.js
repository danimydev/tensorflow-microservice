const fs = require('fs');
const jpeg = require('jpeg-js')

const decodedImg = path => {
    const img = fs.readFileSync(path)
    return jpeg.decode(img)
}

const deleteFile = path => {
    return fs.unlinkSync(path)
}

module.exports = {
    decodedImg,
    deleteFile
}