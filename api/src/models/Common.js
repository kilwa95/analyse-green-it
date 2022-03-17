const { Model, DataTypes } = require('sequelize')
const connection = require('../config/sequelize')

class Common extends Model {}
Common.init(
  {
    name: { type: DataTypes.STRING, allowNull: false },
  },
  {
    sequelize: connection,
    modelName: 'Common',
  },
)

Common.sync({
  alter: true,
})

module.exports = Common
