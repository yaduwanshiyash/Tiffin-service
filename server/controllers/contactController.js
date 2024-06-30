const Contact = require('../models/Contact');

// Get all contacts
const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create new contact
const createContact = async (req, res) => {
  const { name, email, message } = req.body;
  const contact = new Contact({ name, email, message });

  try {
    const newContact = await contact.save();
    res.status(201).json(newContact);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete contact
const deleteContact = async (req, res) => {
  const { id } = req.params;

  try {
    await Contact.findByIdAndDelete(id);
    res.json({ message: 'Contact deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getContacts, createContact, deleteContact };
