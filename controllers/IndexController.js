class IndexController {
    // router.get('/', IndexController.homePage);
    static homePage(req, res) {
        res.render('home');
    }
    // router.get('/registration', IndexController.registration);
    // router.post('/registration', IndexController.postRegistration);
    // router.get('/login', IndexController.login);
    // router.post('/login', IndexController.postLogin);
}

module.exports = IndexController;
