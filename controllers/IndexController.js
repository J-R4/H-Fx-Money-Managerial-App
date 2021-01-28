const { hash, compare } = require('bcryptjs');
const { User } = require('../models');

class IndexController {
    static homePage(req, res) {
        res.render('home');
    }

    static registration(req, res) {
        res.render('registration');
    }

    static postRegistration(req, res) {
        let userInput = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            birth_date: req.body.birth_date,
            email: req.body.email,
            password: req.body.password,
        };
        // console.log(userInput.password);

        User.create(userInput)
            .then((data) => {
                res.redirect('/login');
            })
            .catch((err) => {
                res.send(err);
            });
    }

    static login(req, res) {
        res.render('login');
    }

    static postLogin(req, res) {
        const { email, password } = req.body;

        User.findOne({ where: { email: email } })
            .then((user) => {
                if (compare(password, user.password)) {
                    req.app.locals.isLogin = true;
                }
                res.send(user);
            })
            .catch((err) => {
                res.send(err.message);
            });
    }
}

module.exports = IndexController;
