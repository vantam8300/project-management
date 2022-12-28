const User = require("./User");
const Project = require("./Project");
const Role = require("./Role");
const Task = require("./Task");
const UserProject = require("./UseProject");


User.belongsToMany(Project, { through: UserProject });
Project.belongsToMany(User, { through: UserProject });

Role.hasMany(User);
User.belongsTo(Role);

Project.hasMany(Task);
Task.belongsTo(Project);

module.exports = { User, Task, Project, Role };