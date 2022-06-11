const { login, register } = require('./controllers/authController');
const createController = require('./controllers/createController');
const homeController = require('./controllers/homeController');
const housingForRentController = require('./controllers/housingForRentController');
const searchController = require('./controllers/searchController');

const router = require('express').Router();

router.get('/', homeController);

router.route('/auth/login')
	.get(login.get)
	.post(login.post);

router.route('/auth/register')
	.get(register.get)
	.post(register.post);

router.route('/housing-for-rent')
	.get(housingForRentController.get)
	.post(housingForRentController.post);

router.route('/create-offer')
	.get(createController.get)
	.post(createController.post);

router.route('/search')
	.get(searchController.get)
	.post(searchController.post);

router.all('*', (req, res) => {
	res.render('404');
})

module.exports = router;