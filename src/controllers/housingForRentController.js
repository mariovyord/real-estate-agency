const { getAllHouses } = require("../services/houseService");

module.exports = {
	async get(req, res) {
		const houses = await getAllHouses();
		res.render('aprt-for-rent', { houses });
	},
}