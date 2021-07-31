'use strict';
module.exports = {
  up: async (queryinterface, Sequelize) => { 
    await queryinterface.addColumn('Users','password',Sequelize.DataTypes.STRING, { 
      allowNull: false,
    });
    await queryinterface.changeColumn('Users','email',Sequelize.DataTypes.STRING, { 
      unique: true,
    });
  },
  down: async (queryinterface, Sequelize) => {
    await queryinterface.removeColumn('Users','password');
    await queryinterface.changeColumn('Users','email',Sequelize.DataTypes.STRING, { 
      unique: false,
    });  }
};
