const {Model, DataTypes} = require('sequelize');
const { gallery } = require('.');
const sequelize = require('../config/connections')


class Paintings extends Model {}

Paintings.init(

{
    id: {

        type: DataTypes.INTEGER,
        allowNull:false,
        primaryKey: true,
        autoIncrement:true


    },

    title: {

        type: DataTypes.STRING,
        allowNull: false

    },
    
    artist: {

        type:DataTypes.STRING,
        allowNull:false


    }, 

    exhibition_date: {

        type: DataTypes.DATE,
        allowNull: false


    },

    filename: {

        type: DataTypes.STRING,
        allowNull: false

    },

    description: {

        type: DataTypes.STRING,
        allowNull: false


    },
    
    gallery_id : {
        type: DataTypes.INTEGER,
        references: {

            model:'gallery',
            key:  'id'

        }


    }



},

{

    sequelize,
    modelName : "paintings",
    freezeTableName: true,
    timestamps: true
 

}


)