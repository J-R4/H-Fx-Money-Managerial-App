//@ts-check
'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class HFx extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    HFx.init(
        {
            UserId: DataTypes.INTEGER,
            BankId: DataTypes.INTEGER,
            amount: DataTypes.INTEGER,
            transaction_type: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'HFx',
            timestamps: true,
            underscored: true,
        }
    );
    return HFx;
};
