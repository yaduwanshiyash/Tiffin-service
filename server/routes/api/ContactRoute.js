// routes/api/contact.js

const express = require('express');
const { check, validationResult } = require('express-validator');
const Contact = require('../../models/Contact');
const router = express.Router();

// @route   POST api/contact
// @desc    Create a contact form entry
// @access  Public
router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('message', 'Message is required').not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, message } = req.body;

    try {
      const newContact = new Contact({
        name,
        email,
        message,
      });

      const contact = await newContact.save();
      res.json(contact);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

// @route   GET api/contact
// @desc    Get all contact form entries
// @access  Public
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ date: -1 });
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   GET api/contact/:id
// @desc    Get a specific contact form entry
// @access  Public
// Get all contacts
router.get('/', async (req, res) => {
    try {
      const contacts = await Contact.find().sort({ date: -1 });
      res.json(contacts);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  });

// @route   PUT api/contact/:id
// @desc    Update a contact form entry
// @access  Public
router.put(
  '/:id',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('message', 'Message is required').not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, message } = req.body;

    try {
      let contact = await Contact.findById(req.params.id);

      if (!contact) {
        return res.status(404).json({ msg: 'Contact not found' });
      }

      contact.name = name;
      contact.email = email;
      contact.message = message;

      await contact.save();

      res.json(contact);
    } catch (err) {
      console.error(err.message);
      if (err.kind === 'ObjectId') {
        return res.status(404).json({ msg: 'Contact not found' });
      }
      res.status(500).send('Server error');
    }
  }
);

// @route   DELETE api/contact/:id
// @desc    Delete a contact form entry
// @access  Public

router.delete('/:id', async (req, res) => {
    try {
      console.log(`Deleting contact with ID: ${req.params.id}`);
      const contact = await Contact.findByIdAndDelete(req.params.id);
  
      if (!contact) {
        console.log('Contact not found');
        return res.status(404).json({ msg: 'Contact not found' });
      }
  
      console.log('Contact removed');
      res.json({ msg: 'Contact removed' });
    } catch (err) {
      console.error(err.message);
      if (err.kind === 'ObjectId') {
        console.log('Invalid ObjectId');
        return res.status(404).json({ msg: 'Contact not found' });
      }
      res.status(500).send('Server error');
    }
  });
  
  

module.exports = router;
