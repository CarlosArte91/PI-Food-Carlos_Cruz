const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('recipe', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT
    },
    healthScore: {
      type: DataTypes.INTEGER
    },
    summary: {
      type: DataTypes.TEXT
    },
    steps: {
      type: DataTypes.TEXT
    }
  },
  {
    timestamps: false
  });
};
