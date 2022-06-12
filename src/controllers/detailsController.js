const { getHouseById } = require("../services/houseService");

module.exports = {
	async get(req, res) {
		const house = await getHouseById(req.params._id);
		const hasUser = res.locals.hasUser;
		let isOwner = false;
		if (hasUser) {
			isOwner = res.locals.user._id == house.owner;
		}
		res.render('details', { house, hasUser, isOwner });
	},
	async post(req, res) {

		res.redirect('/create-offer');
	}
}