import { Model, DataTypes } from 'sequelize';
import connection from '../db/database';
import User from './User';

class UserType extends Model {}

UserType.hasMany(User);

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
  sequelize : connection, // Connection instance
  modelName: 'UserType' // Mmodel name
});
export {UserType};
