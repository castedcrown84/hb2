const sequelize = require('../config/connections')
const {Model, DataTypes} = require('sequelize')
const bcrypt = require('bcrypt');



class User extends Model { checkpassword(userpw){

return bcrypt.compareSync(userpw, this.password)



} }

User.init(

{

  id:{

    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement:true,
    allowNull:false

    },

username:{

type: DataTypes.STRING,
allowNull: false

},

email:{
type: DataTypes.STRING,
unique:true,
allowNull:false,
validate:{

    isEmail:true
}

},

password:{

type: DataTypes.STRING,
allowNull:false,
validate:{

len: [6]

}


}






},


{

    hooks:{

    beforeCreate: async (newUser) => {

    newUser.password = await bcrypt.hash(newUser.password, 10);
    return newUser;


    },

    beforeUpdate: async (userUpdate) => {

        userUpdate.password = await bcrypt.hash(userUpdate.password, 10)

    }



    



    },





sequelize,
modelName: 'user',
freezeTableName: true,
timestamps:true



}










)