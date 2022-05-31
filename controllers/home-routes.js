const router = require('express').Router();
const {Paintings, Gallery} = require('../models');





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


    router.get('/gallery/:id', async(req, res) => {
        try {
            const galleryDb = await findByPk(req.params.id, {
                include: [{

                    model: 'painting',
                    attributes: ['id',
                                'filename',
                                'title',
                                'author',
                                'description']   


                }]

            })
            const gallery = galleryDb.get({plain:true})
            console.log(`success!`)
            res.status(204).render('homeroutes', {gallery, loggedIn: req.session.loggedIn})
        } catch (error) {
            console.log(error)
            res.status(404).json(error)
        }
    })


 
    module.exports = router;






