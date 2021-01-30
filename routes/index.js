const router = require('express').Router();
const Controller = require('../controllers');
const authIn = require('../middleware/authIn.js');

router.get('/', Controller.home);

router.get('/login', Controller.login);
router.post('/login', Controller.loginPost);
router.get('/logout', Controller.logout);

router.get('/user', authIn, Controller.banklist);
router.get('/delete', Controller.deleteAccount);

router.get('/transfer', Controller.transfer);
router.post('/transfer', Controller.postTransfer);

router.get('/register', Controller.register);
router.post('/register', Controller.registerPost);

router.get('/addBank', Controller.addBank);
router.post('/addBank', Controller.addBankPost);

module.exports = router;
