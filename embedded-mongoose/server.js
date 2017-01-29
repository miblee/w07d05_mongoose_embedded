const express = require('express');
const path = require('path');

const logger = require ('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/embedded-docs');


const User = require('./models/user.js');
const Author = require('./models/author.js');



// var joe = new User ({
//   name: "Joe Bookreader",
//   addresses: [
//   {
//     street: "123 Fake St",
//     city: "Faketown",
//     state: "CT",
//     zip: 12345
//   },
//   {
//     street: '123 Fake Ave',
//     city: "Faketown",
//     state: "CT",
//     zip: 12346
//   }
//   ]
// })

// joe.addresses.push({
//   street: "1 More St",
//   city: "Hollywood",
//   state: "TX",
//   zip: 34567
// })


// joe.save();

// var book2 = new Author ({
//   name: "Ron Burgundy",
//   age: 47,
// })

// book2.books.push({
//   title: "Booky-book",
//   year: 1989
// },
// {
//   title: "Womp Womp",
//   year: 1746
// })



// book2.save();


// book2.books.push({
//   title: "Paramount",
//   year: 1892
// })

// book2.books[2].remove();
