/* eslint-disable no-param-reassign */
import { Model, DataTypes } from 'sequelize';
import bcryptjs from 'bcryptjs';
import connection from '../db/database';

class User extends Model {
  static associate({ UserType }) {
    // define association here
    this.hasOne(UserType, {
      foreignKey: 'typeId',
      allowNull: false,
    });
  }

  isAdmin() { return this.typeId === 3; }

  async isValidPass(password) { return bcryptjs.compare(password, this.password); }
}

User.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
    defaultValue: '',
    validate: {
      len: {
        args: [3, 255],
        msg: 'Name field must be between 3 e 255 characters',
      },
    },
  },
  email: {
    type: DataTypes.STRING,
    defaultValue: '',
    validate: {
      isEmail: {
        msg: 'Invalid email',
      },
    },
  },
  password: {
    type: DataTypes.STRING,
    defaultValue: '',
    validate: {
      len: {
        args: [6, 80],
        msg: 'Password must be between 6 and 80 characters',
      },
    },
  },
  password_hash: {
    type: DataTypes.VIRTUAL,
    defaultValue: '',
  },
  phoneNumber: {
    type: DataTypes.STRING,
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
    allowNull: false,
    references: {
      model: 'UserType',
      key: 'typeId',
    },
    validate: {
      min: 1,
      max: 3,
    },
  },
}, {
  // Other model options go here
  sequelize: connection, // Connection instance
  modelName: 'User', // Mmodel name
});

// init before adding hooks!
User.addHook('beforeSave', async (user) => {
  if (user.password) {
    user.password_hash = await bcryptjs.hash(user.password, 10);
    user.password = user.password_hash;
  }
});

export { User as default };
