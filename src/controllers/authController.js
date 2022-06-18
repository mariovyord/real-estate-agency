const { register, login, logout } = require('../services/authService');
const { mapErrors } = require('../utils/mapErrors');

module.exports = {
	login: {
		get(req, res) {
			res.render('login');
		},
		async post(req, res) {
			try {
				await login(req.body, req.session);
				res.redirect('/');
			} catch (err) {
				const errors = mapErrors(err);
				console.log(errors)
				res.render('login', { errors });
			}
		}
	},
	register: {
		get(req, res) {
			res.render('register');
		},
		async post(req, res) {
			try {
				if (req.body.password != req.body['re-password']) {
					throw new Error('Passwords should match')
				}

				await register(req.body, req.session);
				res.redirect('/');
			} catch (err) {
				const errors = mapErrors(err);
				console.log(errors)
				res.render('register', { errors });
			}

		}
	},
	logout: async (req, res) => {
		await logout(req.session);
		res.redirect('/');
	}
}