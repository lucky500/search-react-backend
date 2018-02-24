const Gordon = require('./gordon');

Gordon.methods(['get', 'post', 'put', 'delete']);
Gordon.updateOptions({ new: true, runValidators: true });

module.exports = Gordon;