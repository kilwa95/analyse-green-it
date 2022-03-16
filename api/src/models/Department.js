const { Model, DataTypes } = require('sequelize')
const connection = require('../config/sequelize')

class Department extends Model {}
Department.init(
  {
    name: { type: DataTypes.STRING, allowNull: false },
  },
  {
    sequelize: connection,
    modelName: 'Department',
  },
)

Department.sync({
  alter: true,
})

module.exports = Department
