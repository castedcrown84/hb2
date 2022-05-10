const router = require('express').Router();
const User = require('../../models/users');



// Route for creating a new user
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

// api route for user loggin

router.post('/login', async (req, res) => {

try{

    const userData = await User.findOne({
        where: {

            email:req.body.email

        }

    })

    if(!userData){

        res.status(404).json({message: "Email not found!"})


    }
    const validatepw = await checkpassword(req.body.password)

    if(!validatepw){


        res.status(404).json({message: "Invalid Password"})

    }

    req.session.save(() => {

    req.session.loggedin = true
    res.status(200).json({message: "Login successful!"})




    })


}catch(error){
console.log(error)
res.status(400).json(error)
}


})

router.post('/logout', (req, res) => {

if(req.session.loggedin){

req.session.destroy(() => {

res.status(204).end();



})


}else{

res.status(404).end()


}


})

