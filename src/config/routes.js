const express = require('express');

module.exports = function(server){
  //API Routes
  const router = express.Router();
  server.use('/api', router);

  //Gordon Toggle Routes
  const gordonService = require('../api/gordon/gordonService');
  gordonService.register(router, '/products');
}