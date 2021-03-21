const express = require('express');
//const bodyParser = require('body-parser');
const sequelize  = require('./connection')

const port = 3000;

const app = express();


app.use(express.json())
//app.use(bodyParser.json());
//app.use(ex.urlencoded({ extended: false }));





 require('./routes/index')(app)
app.get('*', (req, res) => res.status(200).send({
  message: 'Hello world',
 
}));

app.listen(port, ()=>{
    console.log(`running at ${port}`);
});