module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'movie',
        {
            title: DataTypes.TEXT,
            yearOfRelease: DataTypes.INTEGER,
            synopsis: DataTypes.TEXT,
        }
    )
} 

