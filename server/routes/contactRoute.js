const express = require('express');
const router = express.Router();
const { getContacts, createContact, deleteContact } = require('../controllers/contactController');

// Get all contacts
router.get('/', getContacts);

// Create new contact
router.post('/', createContact);

// Delete contact
router.delete('/:id', deleteContact);

module.exports = router;
