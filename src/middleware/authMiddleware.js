const jwt = require('jsonwebtoken');

const SECRET_KEY = 'my-secret-key';

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }
  
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(403).json({ error: 'Token expired' });
    }
    if (error.name === 'JsonWebTokenError') {
      return res.status(403).json({ error: 'Malformed token' });
    }
    res.status(403).json({ error: 'Invalid token' });
  }
};

const generateToken = (user) => {
  return jwt.sign(
    { id: user.id, email: user.email },
    SECRET_KEY,
    { expiresIn: '24h' }
  );
}

module.exports = { authMiddleware, generateToken };