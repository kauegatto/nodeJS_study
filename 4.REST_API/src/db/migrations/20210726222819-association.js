'use strict';
module.exports = {
  up: async (queryinterface, Sequelize) => { 
    await queryinterface.addColumn('users','typeId',Sequelize.DataTypes.INTEGER, { 
      allowNull: false,
    });
    await queryinterface.addConstraint('users', {
      type:'foreign key',
      fields: ['typeId'],
      name: 'fk_typeId_usertype_users',
      references: { 
        table: 'UserType',
        field: 'typeId',
      },
    });
  },
  down: async (queryinterface, Sequelize) => {
    await queryinterface.removeConstraint('users','fk_typeId_usertype_users');
    await queryinterface.removeColumn('users','typeId');
  }
};
