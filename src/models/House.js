const mongoose = require('mongoose');

const houseSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		enum: ['Apartment', 'Villa', 'House'],
		required: true,
	},
	year: {
		type: Number,
		required: true,
	},
	city: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	available_pieces: {
		type: Number,
		required: true,
	},
	renters: {
		type: [mongoose.Types.ObjectId],
		ref: 'User',
		default: [],
	},
	owner: {
		type: mongoose.Types.ObjectId,
		ref: 'User',
	}
})

const House = mongoose.model('House', houseSchema);

module.exports = House;


