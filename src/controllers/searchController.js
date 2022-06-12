const { searchByType } = require("../services/houseService");

module.exports = {
	get(req, res) {
		res.render('search');
	},
	async post(req, res) {
		const results = await searchByType(req.body.search);
		res.render('search', { results })
	}
}