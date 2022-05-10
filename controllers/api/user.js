const router = require('express').Router();
const Dish = require('../../models/users');


router.post('/', async (req, res) => {

try{
const userData = await Dish.create({


name: req.body.name,
email: req.body.email,
password:req.body.password

})

req.session.save(() => {

req.session.loggedin = true;
res.status(200).json(userData)

})
}catch(error){

res.status(400).json(error)



}

})



