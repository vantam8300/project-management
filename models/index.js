const User = require("./User");
const Project = require("./Project");
const Role = require("./Role");
const Task = require("./Task");
const EmployeeProject = require("./EmployeeProject");
const Employee = require("./Employee");

User.hasOne(Employee);
Employee.belongsTo(User);

Employee.belongsToMany(Project, { through: EmployeeProject });
Project.belongsToMany(Employee, { through: EmployeeProject });

Role.hasMany(Employee);
Employee.belongsTo(Role);

Project.hasMany(Task);
Task.belongsTo(Project);

module.exports = { User, Task, Project, Role, EmployeeProject, Employee };