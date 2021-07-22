import Sequelize, { Model, DataTypes } from 'sequelize';
// const sequelize = new Sequelize('sqlite::memory');
class UserType extends Model {}

UserType.init({
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
  modelName: 'UserType' // Mmodel name
});
UserType.hasMany(User);
