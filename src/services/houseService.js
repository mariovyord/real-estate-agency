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

exports.rentHouse = async (houseId, userId) => {
	const house = await House.findById(houseId);
	if (house.available_pieces > 0) {
		house.renters.push(userId);
		house.available_pieces--;
		house.save();
	} else {
		throw new Error('There are no available pieces')
	}
}

exports.editHouseById = async (data, houseId) => {
	await House.findByIdAndUpdate(houseId, data, { validators: true })
}