const { finalNum, finalName } = require('./readBible')
const express = require('express');
const app = express();

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", '*'); 
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.get('/getFinalNum', (req, resp) => {
    resp.send(finalNum) 
});

app.get('/getFinalName', (req, resp) => {
	resp.send(finalName);
});

app.listen(8080, () => {
	console.log('Server online')
})