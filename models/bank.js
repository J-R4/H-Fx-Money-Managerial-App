'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Bank extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Bank.belongsToMany(models.User, {
                through: models.Bank_Account,
                foreignKey: 'User_Id',
            });
            // define association here
        }
    }
    Bank.init(
        {
            bank_name: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'Bank',
        }
    );
    return Bank;
};
