var DataTypes = require("sequelize").DataTypes;
var _requests = require("./requests");

function initModels(sequelize) {
  var requests = _requests(sequelize, DataTypes);


  return {
    requests,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
