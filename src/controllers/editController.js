const { getHouseById, editHouseById } = require("../services/houseService");

module.exports = {
	async get(req, res) {
		const house = await getHouseById(req.params._id);
		res.render('edit', { house });
	},
	async post(req, res) {
		try {
			await editHouseById(req.body, req.params._id);
			res.redirect('/details/' + req.params._id);
		} catch (err) {
			console.log(err.message);
			res.redirect('/');
		}
	}
}