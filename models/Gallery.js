const {Model, DataTypes} = require('sequelize')
const sequelize = require('../config/connections')


class Gallery extends Model {}

Gallery.init(

{

    id: {

        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true


    },

    name: {

        type: DataTypes.STRING,
        allowNull:false,


    },

    starting_date: {

        type: DataTypes.DATE,
        allowNull:false

    },

    ending_date: {

        type:DataTypes.DATE,
        allowNull:false


    }








},

{

    sequelize,
    modelName: 'gallery',
    freezeTableName: true,
    underscored:true

}


)


module.exports = Gallery