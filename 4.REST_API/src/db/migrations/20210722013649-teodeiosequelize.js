'use strict';
const Sequelize = require('Sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => { 
    await queryInterface.createTable('Users', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INT,
      },
      firstName: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        field_name: 'first_name',
      },
      lastName: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        field_name: 'last_name',
      },
      email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      phoneNumber: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        field_name: 'phone_number',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
        field_name: 'created_at',
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
        field_name: 'updated_at',
      },
      typeId: {
        type: Sequelize.DataTypes.INT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        field_name: 'type_id',
        references: {
          model: {
            tableName: 'UserType',
            key: 'type_id',
          },
        }
      },
    });
    await queryInterface.createTable('UserType', { 
      typeId: {
        type: Sequelize.DataTypes.INT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        field_name: 'type_id',
      },
      typeText: {
        type: Sequelize.DataTypes.TEXT,
        field_name: 'type_text',
        allowNull: false,
      }
    });

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
    await queryInterface.dropTable('UserType');
  }
};
