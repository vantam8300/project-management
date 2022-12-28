const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserProject extends Model { }


UserProject.init(
    {
        project_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "project", 
                key: 'id'
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "user",
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'userProject',
    }
);

module.exports = UserProject;
