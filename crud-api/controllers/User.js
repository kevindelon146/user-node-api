const User = require("../model/User");
const time = new Date();
require('dotenv').config();

const getUsers = (req, res) => {
  User.find((err, users) => {
    if (err) {
      res.send(err);
    }
    res.json(users);
  });
};

const createUser = (req, res) => {
  const users = new User({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    role: req.body.role,
  });

  users.save((err, users) => {
    if (err) {
      res.send(err);
    }
    res.json(users);
  });
};

const updateUser = (req, res) => {
  User.findOneAndUpdate(
    { _id: req.params.usersID },
    {
      $set: {
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        role: req.body.role,
      },
    },
    { new: true },
    (err, User) => {
      if (err) {
        res.send(err);
      } else res.json(User);
    }
  );
};

const deleteUser = (req, res) => {
  User.deleteOne({ _id: req.params.usersID })
    .then(() => res.json({ message: "User Deleted" }))
    .catch((err) => res.send(err));
};

const status = (req, res) => {
  return res.json({environment: process.env.environment, serverStartedAt:time})
}

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  status
};
