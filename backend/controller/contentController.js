const Content = require('../models/Content');

exports.createContent = async (req, res) => {
  try {
    const { title, body, category } = req.body;
    const content = new Content({ title, body, category, author: req.user.userId });
    await content.save();
    res.status(201).json(content);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getContent = async (req, res) => {
  try {
    const contents = await Content.find().populate('author', 'username');
    res.json(contents);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
