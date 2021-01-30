'use strict';
const {
  Model
} = require('sequelize');
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
        through: models.UserBank
      })
    }
  };
  User.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'name must not be empty'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'email must not be empty'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'password must not be empty'
        }
      }
    }
  }, {
    hooks: {
      beforeCreate: (user, options) => {
        let str = ''
        for(let i= 0; i< user.name.length; i++){
          if(i === 0){
            str += user.name[i].toUpperCase()
          }else
          str += user.name[i]
        }
        user.name = str
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};
