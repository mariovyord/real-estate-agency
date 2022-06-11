require('dotenv').config();

const express = require('express');

const port = process.env.PORT || 3000;

(async function start() {
	const app = express();

	await require('./src/config/database')(process.env.CONNECTION_STRING);
	require('./src/config/handlebars')(app);

	app.get('/', (req, res) => {
		res.send('Hello World');
	})

	app.listen(port, () => console.log('App is listening on port ' + port));
})();