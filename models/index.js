const user = require('./Gallery')
const paintings = require('./Paintings')
const gallery = require('./Gallery')


//declares relationship between gallery Model and Paintings
gallery.hasMany(paintings, {

foreignKey: 'gallery_id',


})

paintings.belongsTo(gallery, {

foreignKey: 'gallery_id'

})
 







module.exports = {user, gallery, paintings}