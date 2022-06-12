const { login, register, logout } = require('./controllers/authController');
const createController = require('./controllers/createController');
const detailsController = require('./controllers/detailsController');
const homeController = require('./controllers/homeController');
const housingForRentController = require('./controllers/housingForRentController');
const searchController = require('./controllers/searchController');
const authMiddleware = require('./middleware/authMiddleware');

const router = require('express').Router();

router.use((req, res, next) => {
	console.log('>>>', req.method, req.url);
	next();
})

router.use(authMiddleware());

router.get('/', homeController);

router.route('/auth/login')
	.get(login.get)
	.post(login.post);

router.route('/auth/register')
	.get(register.get)
	.post(register.post);

router.all('/auth/logout', logout);

router.route('/details/:_id')
	.get(detailsController.get)
	.post(detailsController.post);

router.route('/housing-for-rent')
	.get(housingForRentController.get)

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