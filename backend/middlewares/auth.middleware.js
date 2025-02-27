const jwt = require('jsonwebtoken');
const userModel = require('../models/user.model');

module.exports.authUser = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await userModel.findById(decoded._id);
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    next();
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized', error });
  }
};
