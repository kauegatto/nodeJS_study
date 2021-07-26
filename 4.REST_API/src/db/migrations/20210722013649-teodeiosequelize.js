'use strict';
module.exports = {
  up: async (queryinterface, Sequelize) => { 
    await queryinterface.createTable('Users', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      firstName: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      phoneNumber: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
      },
    });
    await queryinterface.createTable('UserType', { 
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
    await queryinterface.dropTable('Users');
    await queryinterface.dropTable('UserType');
  }
};
