const { Model, DataTypes } = require('sequelize')
const connection = require('../config/sequelize')

class Region extends Model {}
Region.init(
  {
    name: { type: DataTypes.STRING, allowNull: false },
  },
  {
    sequelize: connection,
    modelName: 'Region',
  },
)

Region.sync({
  alter: true,
})

module.exports = Region
