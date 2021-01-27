const router = require('express').Router();
const IndexController = require('../controllers/IndexController.js');
// const UserController = require('../controllers/UserController.js');
// const BankController = require('../controllers/BankController.js');
// const HFxController = require('../controllers/HFxController.js');

router.get('/', IndexController.homePage);

// router.get('/registration', IndexController.registration);
// router.post('/registration', IndexController.postRegistration);

// router.get('/login', IndexController.login);
// router.post('/login', IndexController.postLogin);

// router.get('/user/:id', UserController.homePage);

// router.get('/user/deposit/:id', UserController.deposit);

// router.get('/user/transfer/:id', UserController.transfer);

module.exports = router;
