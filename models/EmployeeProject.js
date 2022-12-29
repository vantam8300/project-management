const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class EmployeeProject extends Model { }


EmployeeProject.init(
    {
        project_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "project", 
                key: 'id'
            }
        },
        employee_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "employee",
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'employeeProject',
    }
);

module.exports = EmployeeProject;
