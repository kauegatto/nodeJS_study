'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('userType',
      [ // Array of objects that we will be inserting
        { typeText: 'Student' },
        { typeText: 'Teacher' },
        { typeText: 'Admin' },
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('userType', null, {});
  },
};
