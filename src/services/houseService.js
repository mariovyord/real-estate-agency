const House = require('../models/House');

exports.createHousing = async (houseData, userId) => {
	const data = Object.assign(houseData, { owner: userId });
	const housing = new House(data);
	await housing.save();
	console.log('Housing created');
} 