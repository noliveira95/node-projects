const errorHandler = (err, req, res, next) => {
  return res.status(500).json({ msg: "id is invalid" });
};

module.exports = errorHandler;
