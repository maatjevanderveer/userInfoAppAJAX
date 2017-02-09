const express = require('express')
const app = express()

app.set('views', __dirname + '/views')
app.set('view engine', 'pug')

app.get('/', function(request, response) {
	response.render('index')
});

app.listen(3000, function() {
	console.log('The server is running on port 3000')
})