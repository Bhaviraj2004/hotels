const express = require('express');
const app = express(); //req.body
const db = require('./db');

 
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/',function(req,res){
res.send('welcome to my hotel ... how can i help  you , we have list of menu')
})


  
  /////////////////////////////////////////////
 


  //import the router files
  const personRoutes =require('./routes/personRoutes');

  //use the router files

  app.use('/person', personRoutes)
  


  //menu routs
  //import the router files
  const menuRoutes =require('./routes/menuRoutes');

  //use the router files

  app.use('/MenuItem', menuRoutes)
app.listen(3000,()=>{
    console.log('listening on port 3000 ...')
})