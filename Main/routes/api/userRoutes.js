const router = require('express').Router();
const {
  getusers,
  getSingleuser,
  createuser,
  deleteuser,
  addThought,
  removeThought,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userID
router.route('/:userID').get(getSingleUser).delete(deleteUser);

// /api/users/:userID/thoughts
router.route('/:userID/thoughts').post(addThought);

// /api/users/:userID/thoughts/:thoughtId
router.route('/:userID/thoughts/:thoughtId').delete(removeThought);

module.exports = router;
