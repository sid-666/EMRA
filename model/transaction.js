
module.exports = function(sequelize, DataTypes) {
    var Transactions = sequelize.define("Transactions", {
        type: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        name: {
            type: DataTypes.TEXT,
        },
        value: {
            type: DataTypes.FLOAT
        }
    });

    Transactions.associate = function(models) {
        Transactions.belongsTo(models.User)
    };

    return Transactions;

};
