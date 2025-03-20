const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('requests', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    telegramId: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    message: {
      type: DataTypes.STRING(1024),
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('review','approve','deny',''),
      allowNull: false,
      defaultValue: "review"
    }
  }, {
    sequelize,
    tableName: 'requests',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
