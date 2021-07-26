import Sequelize, { Model, DataTypes } from 'sequelize';
// const sequelize = new Sequelize('sqlite::memory');
class UserType extends Model {}

UserType.init({
  typeId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  typeText: {
    type: DataTypes.TEXT,
    allowNull: false,
  }
}, {
  // Other model options go here
  sequelize, // Connection instance
  modelName: 'UserType' // Mmodel name
});

UserType.hasMany(User);
