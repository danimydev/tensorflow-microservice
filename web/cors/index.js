const cors = require('cors');

const anywhereCorsOptions = {
  origin: '*',
  optionsSuccesStatus: 200,
};

module.exports = {
  anywhere: cors(anywhereCorsOptions),
}