'use strict';
const hash = require('../helpers/bcrypt.js');

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            User.belongsToMany(models.Bank, {
                through: models.HFx,
            });
        }
    }
    User.init(
        {
            first_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            lastName: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            birth_date: {
                type: DataTypes.DATE,
            },
            email: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            balance: {
                type: DataTypes.INTEGER,
                defaultValue: 0,
            },
        },
        {
            sequelize, // We need to pass the connection instance
            modelName: 'User', // We need to choose the model name
            timestamps: true,
            underscored: true,
        }
    );
    // User.addHook('beforeCreate', (user, options) => {
    //     user.password = hash(user.password);
    // });
    return User;
};
