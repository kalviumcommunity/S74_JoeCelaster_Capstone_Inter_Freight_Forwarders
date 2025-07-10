const jwt = require('jsonwebtoken');

exports.protectUser = (req, res, next) => {
  const userToken = req.cookies.user_token;

  if (!userToken) return res.status(401).json({ message: 'Unauthorized' });

  try {
    const decoded = jwt.verify(userToken, process.env.JWT_SECRET);
    req.user = decoded; // { userId: ... }
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

exports.protectAdmin = (req,res,next) => {
  const adminToken = req.cookies.admin_token

  if (!adminToken) return res.status(401).json({message: 'Unauthozied!'})

  try {
    const decoded = jwt.verify(adminToken,process.env.JWT_SECRET)
    req.user = decoded
    next();
  } catch (error) {
    res.status(401).json({message: "Invalid token!"})
  }
}