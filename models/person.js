const mongoose = require('mongoose');

// define the person schema


const personSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    work:{
        type: String,
        required: true,
        enum: ['Engineer', 'Doctor', 'Teacher', 'Lawyer']
    },
    mobile:{
        type: String,
        required: true,
        unique: true,
        // match: /^\d{10}$/
    },
    email:{
        type: String,
        required: true,
        unique: true,
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    },
    address:{
        type: String,
        required: true
    },
    salary:{
        type: Number,
        required: true
    }
});


//create person model;

const Person = mongoose.model('Person', personSchema);

module.exports = Person;
