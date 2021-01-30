const { User, Bank, UserBank } = require('../models');
const { hash, compare } = require('../helpers/bcrypt.js');
class Controller {
    static home(req, res) {
        res.render('home');
    }

    static banklist(req, res) {
        User.findByPk(req.session.userId, {
            include: [
                {
                    model: Bank,
                },
            ],
        })

            .then((data) => {
                // console.log(data[0].Banks);
                res.render('banklist', { banks: data.Banks, name: req.session.name });
            })
            .catch((err) => {
                res.send(err);
            })
            .catch((err) => {
                res.send(err);
            });
    }

    static register(req, res) {
        res.render('register');
    }

    static registerPost(req, res) {
        const { name, email, password } = req.body;
        const hashedPassword = hash(password);
        User.create({ name, email, password: hashedPassword })
            .then((_) => {
                res.redirect('/login');
            })
            .catch((err) => res.send(err));
    }

    static addBank(req, res) {
        Bank.findAll()
            .then((data) => {
                // console.log(data, 'data>>>>>>>>>>');
                res.render('addbanks', { banks: data, name: req.session.name });
            })
            .catch((err) => res.send(err));
    }

    static addBankPost(req, res) {
        console.log(req.session.userId, 'asdfadfadsf>>>>>>');
        let { bank_name, balances } = req.body;
        // console.log(balances, 'balanceee>>>>>>>>');
        UserBank.create({
            UserId: req.session.userId,
            BankId: +bank_name,
            balance: +balances,
        })
            .then((data) => {
                res.redirect('/user');
            })
            .catch((err) => res.send(err));
    }

    static login(req, res) {
        res.render('login');
    }

    static loginPost(req, res) {
        // const {email, password} = req.body
        User.findOne({
            where: {
                email: req.body.email,
            },
        })
            .then((data) => {
                if (compare(req.body.password, data.password)) {
                    req.session.user = true;
                    req.session.userId = data.id;
                    req.session.name = data.name;
                    res.redirect('/user');
                } else {
                    res.redirect('/login');
                }
            })
            .catch((err) => {
                console.log(err, 'login post error');
                res.send(err, 'login post error');
            });
    }

    static logout(req, res) {
        req.session.user = false;
        res.redirect('/login');
    }

    static transfer(req, res) {
        Bank.findAll()
            .then((data) => {
                res.render('transfer', { banks: data, name: req.session.name });
            })
            .catch((err) => res.send(err));
    }

    static postTransfer(req, res) {
        let { targetemail, transferamount } = req.body;

        Bank.findOne({
            where: { bank_name: req.body.bank },
        })

            .then((data) => {
                data.UserBank.balance += transferamount;
                return data.save();
            })
            .then(() => {
                res.redirect('/user');
            })

            .catch((err) => {
                res.send(err);
            });
    }

    static deleteAccount(req, res) {
        User.destroy({
            where: { id: req.session.userId },
        })
            .then((data) => {
                res.redirect('/login');
            })
            .catch((err) => {
                res.send(err);
            });
    }
}

module.exports = Controller;
