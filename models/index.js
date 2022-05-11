const user = require('./Gallery')
const paintings = require('./Paintings')
const gallery = require('./Gallery')

gallery.hasMany(paintings, {

foreignKey: 'gallery_id',


})

paintings.belongsTo(gallery, {

foreignKey: 'gallery_id'

})
 







module.exports = {user, paintings, gallery}