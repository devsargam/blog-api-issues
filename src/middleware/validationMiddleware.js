const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validateUser = (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  if (!validateEmail(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }

  if (password.length < 6) {
    return res
      .status(400)
      .json({ error: "Password must be at least 6 characters" });
  }

  next();
};

const validateBlog = (req, res, next) => {
  const { title, content, author } = req.body;

  if (!title || !content || !author) {
    return res
      .status(400)
      .json({ error: "Title, content, and author are required" });
  }

  if (title.length < 5) {
    return res
      .status(400)
      .json({ error: "Title must be at least 5 characters" });
  }

  if (content.length < 20) {
    return res
      .status(400)
      .json({ error: "Content must be at least 20 characters" });
  }

  next();
};

const validateComment = (req, res, next) => {
  const { text } = req.body;

  if (!text || text.trim() === "") {
    return res.status(400).json({ error: "Comment text is required" });
  }

  if (text.length > 500) {
    return res
      .status(400)
      .json({ error: "Comment must be less than 500 characters" });
  }

  next();
};

const validateId = (paramName) => {
  return (req, res, next) => {
    const id = req.params[paramName];

    if (!id || isNaN(parseInt(id))) {
      return res.status(400).json({ error: `Invalid ${paramName}` });
    }

    next();
  };
};

module.exports = {
  validateUser,
  validateBlog,
  validateComment,
  validateId,
};
