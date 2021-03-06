const express = require('express');
const sequelize = require('./config/connections');
const path = require('path');
const session = require('express-session');
const routes = require('./controllers')
const SequelizeStore = require('connect-session-sequelize')('session.Store')
const helpers = require('./util/withauths')

//for handlebars
const exphbs = require('express-handlebars');
const hbs = exphbs.create({helpers});



const Port = process.env.Port || 3001;
const app = express();

//session and cookies setup
const sess = {

secret: "Super secret secret",
cookie: {

    maxAge: 68400

},
resave: false,
saveUnintialized: true,

store : new SequelizeStore({

db: sequelize


})

}

app.use(session(sess))

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'public')))
app.use(routes)



sequelize.sync({force:true}).then(

app.listen(Port, ()=>{ 

console.log(`Listening to server on http://localhost:${Port}`)


}))