const { login, register, logout } = require('./controllers/authController');
const createController = require('./controllers/createController');
const detailsController = require('./controllers/detailsController');
const editController = require('./controllers/editController');
const homeController = require('./controllers/homeController');
const housingForRentController = require('./controllers/housingForRentController');
const searchController = require('./controllers/searchController');
const authMiddleware = require('./middleware/authMiddleware');
const hasUserGuard = require('./middleware/hasUserGuard');

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

router.all('/auth/logout', hasUserGuard(), logout);

router.route('/details/:_id')
	.get(detailsController.get);

router.get('/rent/:_id', detailsController.rent);

router.route('/edit/:_id')
	.get(hasUserGuard(), editController.get)
	.post(hasUserGuard(), editController.post);

router.get('/delete/:_id', editController.delete);

router.route('/housing-for-rent')
	.get(housingForRentController.get);

router.route('/create-offer')
	.get(hasUserGuard(), createController.get)
	.post(hasUserGuard(), createController.post);

router.route('/search')
	.get(searchController.get)
	.post(searchController.post);

router.all('*', (req, res) => {
	res.render('404');
})

module.exports = router;