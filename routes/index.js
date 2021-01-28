const router = require('express').Router();
const IndexController = require('../controllers/IndexController.js'); // kurang handle di registrasi dan login
const UserController = require('../controllers/UserController.js');

let auth = require('../helpers/auth.js');

router.get('/', IndexController.homePage);

router.get('/registration', IndexController.registration);
router.post('/registration', IndexController.postRegistration); // error = relation "users" does not exist, when submit

router.get('/login', IndexController.login);
router.post('/login', IndexController.postLogin);

router.get('/user', UserController.userPage);

// router.get('/user/deposit/:id', UserController.deposit);

// router.get('/user/transfer/:id', UserController.transfer);

// router.get('/user/destroy/:id',UserController.destroy)

module.exports = router;
