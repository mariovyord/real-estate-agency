const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
	fullName: {
		type: String,
		required: [true, 'Full name is required'],
		validate: /^[A-Z]([a-z])+ [A-Z]([a-z])+$/
	},
	username: {
		type: String,
		required: [true, 'Username is required'],
		minlength: [5, 'Username should be atleast 5 characters long']
	},
	password: {
		type: String,
		required: [true, 'Password is required'],
		minlength: [4, 'Password should be atleast 4 characters long']
	}
})

userSchema.methods.comparePassword = async function (password) {
	return bcrypt.compare(password, this.password);
}

userSchema.pre('save', async function (next) {
	if (this.isModified('password')) {
		this.password = await bcrypt.hash(this.password, parseInt(process.env.HASH_ROUNDS));
		console.log('Hashing new password');
	}
	next();
})

const User = mongoose.model('User', userSchema);

module.exports = User;