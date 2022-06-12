const { getHouseById, rentHouse } = require("../services/houseService");

module.exports = {
	async get(req, res) {
		const house = await getHouseById(req.params._id);
		house.renters = house.renters.map(x => x.fullName).join(', ');
		const hasUser = res.locals.hasUser;
		const usersData = {};
		if (hasUser) {
			usersData.isOwner = res.locals.user._id == house.owner;
			usersData.isAvailable = house.available_pieces > 0;
			usersData.hasRented = house.renters.map(x => x._id.toString()).includes(req.session.user._id);
		}
		res.render('details', { house, hasUser, usersData });
	},
	async rent(req, res) {
		const userId = req.session.user._id;
		const houseId = req.params._id;
		await rentHouse(houseId, userId);
		res.redirect('/details/' + houseId);
	}
}