const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  status
} = require("./controllers/User");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Let's build a CRUD API!");
});

router.get("/users", getUsers);
router.post("/users", createUser);
router.put("/users/:usersID", updateUser);
router.delete("/users/:usersID", deleteUser);
router.get("/status", status);

module.exports = router;
