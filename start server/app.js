const express = require('express')
const app = express()

app.get('/ping', function(request, response) {
	response.send('pong')
});

app.listen(3000, function() {
	console.log('The server is running on port 3000')
})