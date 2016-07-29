const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const task = require('./api/Task.js');
const getTime = require('./api/time.js');
const port = 7000;

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/setTask', (req, res) => {

	const {text, time} = req.body;

	//initialize new task
	task.set(text, getTime(JSON.parse(time)));
	res.end('done');

})

app.listen(port, () => {
	console.log(`Server listening at ${port}...`);
});

