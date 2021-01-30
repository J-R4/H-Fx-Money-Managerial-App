const { User, Bank, UserBank } = require('../models');
const { hash, compare } = require('../helpers/bcrypt.js');
const nodemailer = require('nodemailer');

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
                res.render('banklist', { banks: data.Banks, name: req.session.name });
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
                // if (req.body) {
                //     function main() {
                //         let testAccount = nodemailer.createTestAccount();
                //         let transporter = nodemailer.createTransport({
                //             host: 'smtp.ethereal.email',
                //             port: 587,
                //             secure: false, // true for 465, false for other ports
                //             auth: {
                //                 user: testAccount.user, // generated ethereal user
                //                 pass: testAccount.pass, // generated ethereal password
                //             },
                //         });
                //         let info = transporter.sendMail({
                //             from: 'joshuafanera@gmail.com', // sender address
                //             to: email, // list of receivers
                //             subject: 'Thank You for Trusting H-Fx ✔', // Subject line
                //             text: `Hello ${name}, its good to see you using our application,
                //         if you had any trouble you can see at the Home page of the application`, // plain text body
                //         });
                //         console.log('Message sent: %s', info.messageId);
                //         console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
                //     }
                //     main().catch(console.error);

                //     res.redirect('/login');
                // } else
                res.redirect('/login');
            })
            .catch((err) => res.send(err));
    }

    static addBank(req, res) {
        Bank.findAll()
            .then((data) => {
                res.render('addbanks', { banks: data, name: req.session.name });
            })
            .catch((err) => res.send(err));
    }

    static addBankPost(req, res) {
        let { bank_name, balances } = req.body;
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
