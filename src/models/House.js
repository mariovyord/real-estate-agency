const mongoose = require('mongoose');

const houseSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		minlength: [6, 'Name minimum length is 6 characters'],
	},
	type: {
		type: String,
		enum: ['Apartment', 'Villa', 'House'],
		required: true,
	},
	year: {
		type: Number,
		required: true,
		min: 1850,
		max: 2021,
	},
	city: {
		type: String,
		required: true,
		minlength: [4, 'City name minimum length is 6 characters']
	},
	image: {
		type: String,
		required: true,
		validate: /^http/
	},
	description: {
		type: String,
		required: true,
		maxlength: 60,
	},
	available_pieces: {
		type: Number,
		required: true,
		min: 0,
		max: 10,
	},
	renters: {
		type: [mongoose.Types.ObjectId],
		ref: 'User',
		default: [],
	},
	owner: {
		type: mongoose.Types.ObjectId,
		ref: 'User',
	},
},
	{
		timestamps: true,
	})

const House = mongoose.model('House', houseSchema);

module.exports = House;


