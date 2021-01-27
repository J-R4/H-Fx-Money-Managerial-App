const router = require('express').Router();
const IndexController = require('../controllers/IndexController.js');
const UserController = require('../controllers/UserController.js');

router.get('/', IndexController.homePage);

router.get('/registration', IndexController.registration);
router.post('/registration', IndexController.postRegistration);

router.get('/login', IndexController.login);
router.post('/login', IndexController.postLogin);

// router.get('/user/:id', (req, res, next) => {
//         console.log('check login');
//         if (req.app.locals.isLogin) {
//             next();
//         } else {
//             res.redirect('/login');
//         }
//     }, UserController.userPage);

// router.get('/user/deposit/:id', UserController.deposit);

// router.get('/user/transfer/:id', UserController.transfer);

module.exports = router;
