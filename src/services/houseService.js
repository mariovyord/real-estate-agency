const House = require('../models/House');

exports.createHousing = async (houseData, userId) => {
	const data = Object.assign(houseData, { owner: userId });
	const housing = new House(data);
	await housing.save();
	console.log('Housing created');
}

exports.getThreeLatestHouses = async () => {
	const houses = House.find({})
		.sort({ createdAt: -1 })
		.limit(3)
		.select('name image').lean();
	return houses;
}

exports.getAllHouses = async () => {
	const houses = House.find({})
		.sort({ createdAt: -1 })
		.select('name image description owner').lean();
	return houses;
}

exports.getHouseById = async (id) => {
	const house = House.findById(id).populate('renters').lean();
	return house;
}