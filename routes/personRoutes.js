const express = require('express');
const router = express.Router();
const Person = require('./../models/person');

//post route to add a person
router.post('/', async (req, res) => {
    try {
      const data = req.body; // Assuming the request body contains the person data
  
      // Create a new person document using the mongoose model
      const newPerson = new Person(data);
  
      // Save the new person document to the database
      const savedPerson = await newPerson.save();
      res.json(savedPerson);
    } catch (err) {
      res.status(400).json({ error: 'Error: ' + err.message });
    }
  });



  router.get('/', async (req, res) => {
    try {
      // Fetch all person documents from the database
      const data = await Person.find(); 
      console.log("Data fetched:", data);
  
      // Send fetched data as the response
      res.status(200).json(data);
    } catch (err) {
      res.status(400).json({ error: 'Error: ' + err.message });
    }
  });




  router.get('/:workType', async (req, res) => {
    try{
      const workType = req.params.workType // extract the workType from the URL parameter
      if(workType=='Engineer' || workType=='Doctor' || workType== 'Teacher' || workType=='Lawyer'){
        const response = await Person.findOne({work:workType});
        console.log('response fetched');
        res.status(200).json(response);
      }else{
        res.status(400).json({error: 'Invalid work type'});
      }
    }catch (err) {
console.log(err);
res.status(500).json({error:"internal server error"})
    }
  });

  

module.exports = router;
