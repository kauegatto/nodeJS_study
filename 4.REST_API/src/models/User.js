import Sequelize, { Model, DataTypes } from 'sequelize';
// const sequelize = new Sequelize('sqlite::memory');
class User extends Model {}

User.init({
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
}, {
  // Other model options go here
  sequelize, // Connection instance
  modelName: 'User' // Mmodel name
});
User.hasOne(UserType)