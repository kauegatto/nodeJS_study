'use strict';
module.exports = {
  up: async (queryinterface, Sequelize) => { 
    await queryinterface.createTable('users', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      phoneNumber: {
        type: Sequelize.DataTypes.STRING,
      },
      createdAt: {
        type: Sequelize.DataTypes.DATE,
      },
      updatedAt: {
        type: Sequelize.DataTypes.DATE,
      },
    });
    await queryinterface.createTable('userType', { 
      typeId: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      typeText: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: false,
      }
    });
  },

  down: async (queryinterface, Sequelize) => {
    await queryinterface.dropTable('users');
    await queryinterface.dropTable('userType');
  }
};
