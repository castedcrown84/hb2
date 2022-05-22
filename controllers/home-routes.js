const router = require('express').Router();
const Paintings = require('../models/Paintings')
const Gallery = require('../models/Gallery');
const { gallery } = require('../models');




    router.get('/', async(req, res) => {

        try{

        const Gallerydb = await Gallery.findAll({
            //joins gallery with with paintings
            include: [{

                model:Paintings,
                attributes: ['filename', 'description']

            }]

        })

    const galleries = Gallerydb.map((gallery) => {

            gallery.get({plain:true})


        })

        res.render('homepage', { galleries,
            loggedIn: req.session.loggedIn


        } )

        }catch(err){


            res.status(500).json(err)


        }



    })



 
    module.exports = router;






