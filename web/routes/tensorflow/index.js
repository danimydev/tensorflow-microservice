const router = require('express').Router();

const { upload } = require('../../middlewares/multer');

const {
  classifyController,
  detectController
} = require('../../controllers/tensorflow');

const {
  adaptToExpressController
} = require('../../express_cb_adapter');

router.get(
  '/classify',
  upload.single('img'),
  adaptToExpressController({
    controller: classifyController,
  })
);

router.get(
  '/detect',
  upload.single('img'),
  adaptToExpressController({
    controller: detectController,
  })
);

module.exports = router;