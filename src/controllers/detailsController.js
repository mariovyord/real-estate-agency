const { getHouseById } = require("../services/houseService");

module.exports = {
	async get(req, res) {
		const house = await getHouseById(req.params._id);
		const hasUser = res.locals.hasUser;
		const usersData = {};
		if (hasUser) {
			usersData.isOwner = res.locals.user._id == house.owner;
			usersData.isAvailable = house.available_pieces > 0;
			usersData.hasRented = house.renters.map(x => x._id.toString()).includes(req.session.user._id);
		}
		res.render('details', { house, hasUser, usersData });
	},
	async post(req, res) {

		res.redirect('/create-offer');
	}
}