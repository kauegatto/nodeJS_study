'use strict';
module.exports = {
  up: async (queryinterface, Sequelize) => { 
    await queryinterface.addColumn('Users','password',Sequelize.DataTypes.STRING, { 
      allowNull: false,
    });
    await queryinterface.addConstraint('users', {
      type:'unique',
      fields: ['email'],
      name: 'unique_email',
    });
  },
  down: async (queryinterface, Sequelize) => {
    await queryinterface.removeColumn('Users','password');
    await queryinterface.removeConstraint('users','unique_email');
  }
};
