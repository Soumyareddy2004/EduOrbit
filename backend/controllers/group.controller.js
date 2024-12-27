const Group = require('../models/group.model');

// Create or join a group
const createOrJoinGroup = async (req, res) => {
  const { groupLink } = req.body;
  try {
    let group = await Group.findOne({ groupLink });
    if (!group) {
      group = await Group.create({ groupLink });
    }
    res.status(200).json(group);
  } catch (error) {
    res.status(500).json({ message: 'Error creating/joining group', error });
  }
};

// Fetch group details
const getGroupDetails = async (req, res) => {
  try {
    const group = await Group.findOne({ groupLink: req.params.groupLink });
    if (!group) {
      return res.status(404).json({ message: 'Group not found' });
    }
    res.status(200).json(group);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching group data', error });
  }
};

// Add a message
const addMessage = async (req, res) => {
  const { user, text } = req.body;
  try {
    const group = await Group.findOneAndUpdate(
      { groupLink: req.params.groupLink },
      { $push: { messages: { user, text } } },
      { new: true }
    );
    res.status(200).json(group);
  } catch (error) {
    res.status(500).json({ message: 'Error adding message', error });
  }
};

module.exports = {
  createOrJoinGroup,
  getGroupDetails,
  addMessage,
};
