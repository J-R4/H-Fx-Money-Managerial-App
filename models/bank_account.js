'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Bank_Account extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Bank_Account.hasMany(models.User_Transaction);
        }
    }
    Bank_Account.init(
        {
            User_Id: DataTypes.INTEGER,
            Bank_Id: DataTypes.INTEGER,
            balance: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'Bank_Account',
        }
    );
    return Bank_Account;
};
