const express = require('express');
const sequelize = require('./config/connections');
const path = require('path');
const exphbs = require('express-handlebars');

const hbs = exphbs.create({});



const Port = process.env.Port || 3001;
const app = express();

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'public')))



sequelize.sync({force:true}).then(

app.listen(Port, ()=>{ 

console.log(`Listening to server on http://localhost:${Port}`)


}))