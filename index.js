require('dotenv').config();

const express = require('express');
const router = require('./src/router');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const helmet = require('helmet');

const port = process.env.PORT || 3000;

(async function start() {
	const app = express();

	await require('./src/config/database')(process.env.CONNECTION_STRING);
	require('./src/config/handlebars')(app);

	// app.use(helmet());
	app.use(express.urlencoded({ extended: true }));
	app.use(cookieParser());
	app.use(session({
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: true,
		cookie: { secure: 'auto' }
	}))
	app.use('/static', express.static('public'));
	app.use(router);

	app.listen(port, () => console.log('App is listening on port ' + port));
})();