# Mongoose Modeling: Embedded and Referenced

---

## Learning Objectives

SWBAT:

- Create embedded schemas for Mongoose models

---

## Playground

Let's create a node project where we can experiment with mongoose.

----

## Embedded Documents

- Mongo supports array data types for documents
- Example: A user could have multiple addresses
- This is called an embedded document because each of the items items will have an _id field associated with it

---

---
Create a new Express app and install the relevant npm packages:

1. `mkdir embedded-mongoose`
2. `cd embedded-mongoose`
3. `touch server.js`
4. `npm init`
4. `npm install express --save`
5. `npm install morgan --save`
6. `npm install body-parser --save`

To use Mongoose in your Node app:

```bash
$ npm install mongoose --save
```
---

```js
With the package installed, lets use it - open server.js, and create your
mongoose connection(remember family-tree execersie!), and this code snippet

var mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/embedded-docs")

```

---

## Mongoose Embedded Documents

- Mongoose supports enforcing schema for embedded documents. Lets create
out schema. Where does the schema below go?

```js
var mongoose = require('mongoose')

var addressSchema = new mongoose.Schema({
  street: String,
  city: String,
  state: String,
  zip: Number
})

var userSchema = new mongoose.Schema({
  name: String,
  addresses: [addressSchema]
})

```
```

Now compile this schema to a model

```
## In the server.js file, do the following

```js
var joe = new User({
   name: "Joe Bookreader",
   addresses: [
                {
                  street: "123 Fake Street",
                  city: "Faketon",
                  state: "MA",
                  zip: "12345"
                },
                {
                  street: "1 Some Other Street",
                  city: "Boston",
                  state: "MA",
                  zip: "12345"
                }
              ]
});

```

```js

Where does this code snippet go?

var User = require('./models/user')

# Now create the user Joe 

joe.save();

```

---

## Create and save embedded docs

```js
joe.addresses.push({
  street: '100 Main St',
  city: 'Los Angeles',
  state: 'CA',
  zip: 90007
});

joe.save();
```

## Independent Practice

- Create a model Author with the attributes:
  - name -> String
  - age -> Number
  - books -> Array
    - title -> String
    - year -> Date
- Make sure the books array is an embedded document with its own schema

---

## Independent Practice: Part 2

- Create an author with a name, age, and empty array of books
- insert 2 books into the author document we just created

---

## Referenced docs

Let's take this opportunity to practice reading docs.  Here is a link to the [mongoose documentation](http://mongoosejs.com/docs/populate.html) that is relevant to our topic.

---

## Additional Resources

- [Embedded Docs](http://mongoosejs.com/docs/subdocs.html)
