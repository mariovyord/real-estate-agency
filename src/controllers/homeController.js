const { getThreeLatestHouses } = require("../services/houseService");

module.exports = async (req, res) => {
	const houses = await getThreeLatestHouses();
	res.render('home', { houses });
}