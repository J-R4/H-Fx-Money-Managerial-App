const { User, Bank, Bank_Account, User_Transactions } = require('../models');

class UserController {
    static userPage(req, res) {
        console.log(req.session.userId , '>>>>>>>>>>>>>>>>>tesasdfasfasfasfasfast');
        let balances = []
        let bankNames = []
        User.findAll({
            where: {

            },
            include: {model: Bank,
            key: 'id'
            }
            // where: {
            //     User_Id: req.session.userId 
        })
        .then(data => {
            console.log(data, ' data ');
            res.send(data)
            data.forEach(e => {
                balances.push(e.balance)
            })
            res.render('user.ejs', {})
            
        })
        .catch(err => {
            console.log(err, 'user page error');
            res.send(err)
        })

    }

    static deposit(req, res) {
        //
    }

    static transfer(req, res) {
        //
    }

    static destroy(req, res) {
        //
    }
}

module.exports = UserController;
