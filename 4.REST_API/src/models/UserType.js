import Sequelize, { Model, DataTypes } from 'sequelize';
// const sequelize = new Sequelize('sqlite::memory');
class userType extends Model {}

userType.init({
  typeId: {
    type: DataTypes.INT,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    field_name: 'type_id',
  },
  typeText: {
    type: DataTypes.TEXT,
    field_name: 'type_text',
    allowNull: false,
  }
}, {
  // Other model options go here
  sequelize, // Connection instance
  modelName: 'User' // Mmodel name
});
userType.hasMany(User);
