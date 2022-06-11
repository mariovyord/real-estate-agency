const express = require('express');

const port = 3000;

(async function start() {
	const app = express();

	app.get('/', (req, res) => {
		res.send('Hello World');
	})

	app.listen(port, () => console.log('App is listening on port ' + port));
})();