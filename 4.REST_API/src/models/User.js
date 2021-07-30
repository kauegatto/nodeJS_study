import { Model, DataTypes } from 'sequelize';
import connection from '../db/database';

class User extends Model {
  static associate({ UserType }) {
    // define association here
    this.hasOne(UserType, {
      foreignKey: 'typeId',
      allowNull: false,
    })
  }
}

User.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  typeId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'UserType',
      key: 'typeId'
    }
  },
}, {
  // Other model options go here
  sequelize: connection, // Connection instance
  modelName: 'User' // Mmodel name
});
export {User as default };
