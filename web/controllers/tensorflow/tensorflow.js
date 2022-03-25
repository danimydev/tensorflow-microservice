class TensorflowController {

  #usecase;
  #readFile;
  #deleteFile;

  constructor({ usecase, readFile, deleteFile }) {
    this.#usecase = usecase;
    this.#readFile = readFile;
    this.#deleteFile = deleteFile;
  }

  async execute({ httpRequest }) {
    try {
      const { path, filename } = httpRequest.file;
      const imgBuffer = this.#readFile({ path });
      const predictions = await this.#usecase({ buffer: imgBuffer });
      this.#deleteFile({ filename });
      return {
        statusCode: 200,
        body: predictions,
      }
    } catch (error) {
      return {
        statusCode: 500,
        body: error,
      }
    }
  }

}

module.exports = {
  TensorflowController,
}