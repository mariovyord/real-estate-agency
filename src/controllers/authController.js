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
				res.redirect('/auth/login');
			}
		}
	},
	register: {
		get(req, res) {
			res.render('register');
		},
		async post(req, res) {
			try {
				await register(req.body, req.session);
				res.redirect('/');
			} catch (err) {
				console.log(err.message);
				res.redirect('/auth/register');
			}

		}
	},
	logout: async (req, res) => {
		await logout(req.session);
		res.redirect('/');
	}
}