const router = require('express').Router()
const imageRecognition = require('../components/image_recognition')
const multer = require('multer')

router.get('/', (req, res) => {
    res.json({ msg: 'Hello Tensorflow!' })
})

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'tmp/')
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = `${Date.now()} - ${Math.round(Math.random() * 1E9)}`
        cb(null, `${file.fieldname} - ${uniqueSuffix}`)
    }
})

const upload = multer({ storage: storage })

router.post('/image', upload.single('img'), async (req, res) => {
    try {
        const predictions = await imageRecognition.classify(req.file.path)
        // delete file
        res.status(201).json({
            msg: 'Image was uploaded and processed correctly!',
            predictions
        })
    } catch (error) {
        res.status(401).json(error)
    }
})

module.exports = router