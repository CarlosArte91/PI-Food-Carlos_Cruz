const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('dietType', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(50)
        }
    },
    {
        timestamps: false
    });
};