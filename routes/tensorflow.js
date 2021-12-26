const router = require('express').Router();
const TensorFlow = require('../components/tensorflow');
const multer = require('multer');

router.get('/', (req, res) => {
    res.json({ msg: 'Hello Tensorflow!' });
});

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'tmp/');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = `${Date.now()} - ${Math.round(Math.random() * 1E9)}`;
        cb(null, `${file.fieldname} - ${uniqueSuffix}`);
    },
});

const upload = multer({ storage: storage });

router.post('/image_classification', upload.single('img'), async (req, res) => {
    try {
        const predictions = await TensorFlow.classify(req.file.path);
        res.status(201).json({
            msg: 'Image was uploaded and processed correctly!',
            predictions,
        });
    } catch (error) {
        res.status(401).json(error);
    }
});

router.post('/object_detection', upload.single('img'), async (req, res) => {
    try {
        const predictions = await TensorFlow.detect(req.file.path);
        res.status(201).json({
            msg: 'Image was uploaded and processed correctly!',
            predictions
        });
    } catch (error) {
        res.status(401).json(error);
    }
});

module.exports = router;