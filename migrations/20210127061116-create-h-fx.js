'use strict';
//@ts-check
module.exports = {
    /**
     *
     * @param {import('sequelize').QueryInterface} queryInterface
     * @param {import('sequelize').Sequelize} Sequelize
     */
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('HFxes', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            UserId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Users',
                    key: 'id',
                },
            },
            BankId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Banks',
                    key: 'id',
                },
            },
            amount: {
                type: Sequelize.INTEGER,
            },
            transaction_type: {
                type: Sequelize.INTEGER,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('HFxes');
    },
};
