const sequelize = require('../config/connections');
const seedGallery = require('./galleryData');
const seedPainting = require('./paintingData');



const seedAll = async () => {

    await sequelize.sync({force: true})

    await seedGallery();

    await seedPainting();
 

    process.exit(0)

}


seedAll()