'use strict';
module.exports = {
  up: async (queryinterface, Sequelize) => { 
    await queryinterface.addColumn('Users','typeId',Sequelize.DataTypes.INTEGER, { 
      allowNull: false,
    });
    await queryinterface.addConstraint('Users', {
      type:'foreign key',
      fields: ['typeId'],
      references: { 
        table: 'UserType',
        field: 'typeId',
      },
    });
  },
  down: async (queryinterface, Sequelize) => {
    await queryinterface.removeColumn('Users','typeId');
    await queryinterface.removeConstraint('Users','typeId');
  }
};
