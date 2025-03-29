const express = require('express');
const router = express.Router();
const db = require('../db');  // Import the helper functions from db.js

// /api/minions Routes
router.get('/minions', (req, res) => {
  const minions = db.getAllFromDatabase('minions');  // Retrieve all minions
  res.json(minions);
});

router.post('/minions', (req, res) => {
  const newMinion = db.addToDatabase('minions', req.body);  // Add a new minion to the database
  res.status(201).json(newMinion);
});

router.get('/minions/:minionId', (req, res) => {
  const minion = db.getFromDatabaseById('minions', req.params.minionId);  // Retrieve a minion by ID
  if (minion) {
    res.json(minion);
  } else {
    res.status(404).send('Minion not found');
  }
});

router.put('/minions/:minionId', (req, res) => {
  const updatedMinion = db.updateInstanceInDatabase('minions', { ...req.body, id: req.params.minionId });
  if (updatedMinion) {
    res.json(updatedMinion);
  } else {
    res.status(404).send('Minion not found');
  }
});

router.delete('/minions/:minionId', (req, res) => {
  const success = db.deleteFromDatabasebyId('minions', req.params.minionId);  // Delete a minion by ID
  if (success) {
    res.status(200).send('Minion deleted');
  } else {
    res.status(404).send('Minion not found');
  }
});

// Repeat the same process for /api/ideas, /api/meetings, etc.
router.get('/ideas', (req, res) => {
  const ideas = db.getAllFromDatabase('ideas');  // Retrieve all ideas
  res.json(ideas);
});

router.post('/ideas', (req, res) => {
  const newIdea = db.addToDatabase('ideas', req.body);  // Add a new idea
  res.status(201).json(newIdea);
});

// Similarly for /api/meetings

module.exports = router;  // Export the router to be used in your server.js file
