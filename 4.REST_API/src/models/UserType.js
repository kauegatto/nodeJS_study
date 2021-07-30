import { Model, DataTypes } from 'sequelize';
import connection from '../db/database';

class UserType extends Model {
  static associate({ User }) {
    // define association here
    this.hasMany(User);
  }
}

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
  modelName: 'usertype', // Model name
  freezeTableName: true, // Use singular table name
  timestamps: false, // Avoid the insertion of created_at and updated_at
});
export {UserType as default};
