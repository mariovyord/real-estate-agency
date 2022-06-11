const router = require('express').Router();

router.get('/', (req, res) => {
	res.send('Hello from Router');
})

module.exports = router;