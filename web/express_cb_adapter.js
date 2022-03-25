function adaptToExpressController({ controller }) {
  return async (req, res) => {
    try {
      const httpRequest = buildHttpRequest(req);
      const { statusCode, body } = await controller.execute({ httpRequest });
      return res.status(statusCode).json(body);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
}

function buildHttpRequest(req) {
  return {
    params: req.body,
    body: req.body,
    file: {
      path: req.file.path,
      filename: req.file.filename,
    }
  }
}

module.exports = {
  adaptToExpressController,
}