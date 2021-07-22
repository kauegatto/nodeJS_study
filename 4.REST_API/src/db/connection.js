import Sequelize from 'sequelize';

const sequelizeConfig = require('../config/database');

export default new Sequelize(sequelizeConfig);
