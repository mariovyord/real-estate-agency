module.exports = {
	login: {
		get(req, res) {
			res.render('login');
		},
		post(req, res) {
			res.redirect('/');
		}
	},
	register: {
		get(req, res) {
			res.render('register');
		},
		post(req, res) {
			res.redirect('/');
		}
	},
	logout: {
		get(req, res) {
			res.render('/');
		},
		post(req, res) {
			res.redirect('/');
		}
	},
}