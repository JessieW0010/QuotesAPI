const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));

const quote = require('./routes/quote.js');

app.use('/quote', quote);

app.get('/healthcheck', (req, res) => {
  return res.status(200).json({
    msg: 'I\'m fine thanks for checking!'
  })
})

app.listen(process.env.PORT || 8000, () => {
  console.log(`Server listening on port ${process.env.PORT || 8000}!`)
});