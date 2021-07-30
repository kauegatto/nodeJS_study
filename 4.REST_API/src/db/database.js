import Sequelize from 'sequelize';
import sequelizeConfig from '../config/database';

const connection = new Sequelize(sequelizeConfig);

export default connection;
