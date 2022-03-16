const { Model, DataTypes } = require('sequelize')
const connection = require('../config/sequelize')

class City extends Model {}
City.init(
  {
    name: { type: DataTypes.STRING, allowNull: false },
  },
  {
    sequelize: connection,
    modelName: 'City',
  },
)

City.sync({
  alter: true,
})

module.exports = City
