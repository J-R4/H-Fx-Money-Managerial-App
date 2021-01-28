'use strict';

const fs = require('fs');
const path = require('path');

let bankPath = path.resolve(__dirname, '../seed/bankList.json');

module.exports = {
    up: (queryInterface, Sequelize) => {
        let bankData = JSON.parse(fs.readFileSync(bankPath, 'utf-8'));
        bankData.forEach((el) => {
            el.createdAt = new Date();
            el.updatedAt = new Date();
        });

        return queryInterface.bulkInsert('Banks', bankData, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Banks', null, {});
    },
};
