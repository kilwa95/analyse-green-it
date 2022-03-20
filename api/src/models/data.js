const { Model, DataTypes } = require('sequelize')
const connection = require('../config/sequelize')

class Data extends Model {}
Data.init(
  {
    common: { type: DataTypes.STRING, allowNull: true },
    dep: { type: DataTypes.STRING, allowNull: true },
    region: { type: DataTypes.STRING, allowNull: true },
    pop: { type: DataTypes.STRING, allowNull: true },
    score_global_dep: { type: DataTypes.STRING, allowNull: true },
    score_global_region: { type: DataTypes.STRING, allowNull: true },
    acces_information_dep: { type: DataTypes.STRING, allowNull: true },
    acces_information_region: { type: DataTypes.STRING, allowNull: true },
    acces_interface_numirique_dep: { type: DataTypes.STRING, allowNull: true },
    acces_interface_numirique_region: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    competence_admin_dep: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    competence_admin_region: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize: connection,
    modelName: 'Data',
  },
)

Data.sync({
  alter: true,
})

module.exports = Data
