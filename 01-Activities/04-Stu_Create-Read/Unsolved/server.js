const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3001;

const connectionStringURI = `mongodb://127.0.0.1:27017`;

const client = new MongoClient(connectionStringURI);

let db;

const dbName = 'GoldenDogDB';

client.connect()
  .then(() => {
    console.log('Connected successfully to MongoDB');
    db = client.db(dbName);
    console.log("___: "+db)

    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('Mongo connection error: ', err.message);
  });

app.use(express.json());



app.post('/create', (req, res) => {
  db.collection('petCollection').insertOne(
    { title: req.body.title, author: req.body.author }
  )
    .then(results => res.json(results))
    .catch(err => {
      if (err) throw err;
    });
});

app.post('/create-many', (req, res) => {
  db.collection('petCollection').insertMany(
    req.body
  )
    .then(results => res.json(results))
    .catch(err => {
      if (err) throw err;
    });
});

app.get('/read', (req, res) => {
  db.collection('petCollection')
    .find({})
    .toArray()
    .then(results => res.json(results))
    .catch(err => {
      if (err) throw err;
    });
});
