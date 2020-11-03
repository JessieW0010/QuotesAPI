const express    = require('express');
const controller = require('../controllers/quote.js');
const quoteHandler = express.Router();

quoteHandler.post(
  '/',
  controller.quote,
)

module.exports = quoteHandler;
