'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users',
      [ // Array of objects that we will be inserting
        {
          name: 'John Doe',  
          email: 'johndoe@gmail.com', password: '123', 
          phoneNumber: '13 991093667', 
          typeId: 1,
        },

        {
          name: 'Jane Doe', 
          email: 'janedoe@gmail.com', password: '123', 
          phoneNumber: '13 991093667', 
          typeId: 1,
        },
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
