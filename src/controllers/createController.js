const { createHousing } = require("../services/houseService");

module.exports = {
	get(req, res) {
		res.render('create');
	},
	async post(req, res) {
		try {
			await createHousing(req.body, req.session.user._id);
			res.redirect('/');
		} catch (err) {
			console.log(err.message);
			res.render('create', { error: err.message });
		}
	}
}