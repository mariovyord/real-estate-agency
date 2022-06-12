const { register, login, logout } = require('../services/authService');

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
				console.log(err.message);
				res.render('login', { error: err.message });
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
				console.log(err.message);
				res.render('register', { error: err.message });
			}

		}
	},
	logout: async (req, res) => {
		await logout(req.session);
		res.redirect('/');
	}
}