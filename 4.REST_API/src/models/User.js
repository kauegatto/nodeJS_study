import Sequelize, { Model, DataTypes } from 'sequelize';
// const sequelize = new Sequelize('sqlite::memory');
class User extends Model {}

User.init({
  firstName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'first_name',
  },
  lastName: {
    type: DataTypes.STRING
  }
}, {
  // Other model options go here
  sequelize, // Connection instance
  modelName: 'User' // Mmodel name
});
User.hasOne(UserType);