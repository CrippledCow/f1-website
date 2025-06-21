const express = require('express');
const { MongoClient } = require('mongodb');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
const uri = process.env.MONGODB_URI;
console.log('MONGODB_URI:', process.env.MONGODB_URI);

const client = new MongoClient(uri);

async function connectDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
}

connectDB();

app.get('/', (req, res) => {
  res.send('Formula 1 Fantasy Backend is running!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});