// const express = require('express');
import express from 'express';
import collection from 'mongodb';
import cors from 'cors';
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const PORT = 8000;

app.get('/', cors(), (req, res) => {});

app.post('/', async (req, res) => {
  const { email, password } = req.body;

  try {
    const check = await collection.findOne({ email: email });
    if (check) {
      res.json('exist');
    } else {
      res.json('notexist');
    }
  } catch (e) {
    res.json(e);
  }
});

app.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  const data = {
    email: email,
    password: password,
  };
  try {
    const check = await collection.findOne({ email: email });
    if (check) {
      res.json('exist');
    } else {
      res.json('notexist');
      await collection.insertMany({ data });
    }
  } catch (e) {
    res.json(e);
  }
});

app.listen(PORT, () => console.log(`App running on http://localhost:${PORT}`));
