'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User_Transaction extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            User_Transaction.belongsTo(models.Bank_Account),
                {
                    foreignKey: 'Bank_Account_Id',
                };
        }
    }
    User_Transaction.init(
        {
            Bank_Account_Id: DataTypes.INTEGER,
            transfer_amount: DataTypes.INTEGER,
            receiver_email: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'User_Transaction',
        }
    );
    return User_Transaction;
};
