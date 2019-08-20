const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

var app = express();
var bodyParser = require('body-parser');
require('body-parser-xml')(bodyParser);

app.use(bodyParser.xml());

app
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', async (req, res) => {
    try {
      res.render('pages/index');
      
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })
  .listen(PORT, () => console.log("Listening on ${PORT}",PORT));
