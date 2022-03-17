const { Model, DataTypes } = require('sequelize')
const connection = require('../config/sequelize')

class Data extends Model {}
Data.init(
  {
    common: { type: DataTypes.STRING, allowNull: true },
    isee_common: { type: DataTypes.NUMBER, allowNull: true },
    department: { type: DataTypes.STRING, allowNull: true },
    isee_department: { type: DataTypes.NUMBER, allowNull: true },
    intercom: { type: DataTypes.STRING, allowNull: true },
    region: { type: DataTypes.STRING, allowNull: true },
    pop: { type: DataTypes.FLOAT, allowNull: true },
    score_global_dep: { type: DataTypes.FLOAT, allowNull: true },
    score_global_intercom: { type: DataTypes.FLOAT, allowNull: true },
    score_global_region: { type: DataTypes.FLOAT, allowNull: true },
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
