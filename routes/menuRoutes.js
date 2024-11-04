const express = require('express');
const menurouter = express.Router();
const MenuItem = require('./../models/MenuItem');

 //post route to add a MenuItem
 menurouter.post('/', async (req, res) => {
    try {
      const data = req.body; // Assuming the request body contains the person data
  
      // Create a new person document using the mongoose model
      const newMenuItem = new MenuItem(data);
  
      // Save the new person document to the database
      const savedMenuItem = await newMenuItem.save();
      res.json(savedMenuItem);
    } catch (err) {
      res.status(400).json({ error: 'Error: ' + err.message });
    }
  });
  menurouter.get('/', async (req, res) => {
    try {
      // Fetch all person documents from the database
      const data = await MenuItem.find(); 
      console.log("Data fetched:", data);
  
      // Send fetched data as the response
      res.status(200).json(data);
    } catch (err) {
      res.status(400).json({ error: 'Error: ' + err.message });
    }
  });


//comment added in this line
  module.exports = menurouter;