var express = require('express')
var app = express()

var index = require('./routes/index.js')

/*app.get('/', function (req, res) {
  res.send('Hello World!')
})*/

app.use('/',index)
app.set('views',__dirname + '/public/views')
app.use(express.static(__dirname + '/' + 'public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine','html')


app.listen(8000, function () {
  console.log('server listening on port 8000')
})