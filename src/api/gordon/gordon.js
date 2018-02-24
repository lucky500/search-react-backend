const restful  = require('node-restful');
const mongoose = restful.mongoose;

const gordonSchema = new mongoose.Schema({
  image: { type: String, require: true },
  title: { type: String, required: true},
  gordonToggle: { type: Boolean, required: true, default: false },
});

module.exports = restful.model('Gordon', gordonSchema);