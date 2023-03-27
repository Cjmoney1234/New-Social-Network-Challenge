const router = require('express').Router();
const {
  getUser,
  getSingleUser,
  updateUser,
  createUser,
  deleteUser,
} = require('../../controllers/users.js');

// /api/users
router.route('/').get(getUser).post(createUser);

// /api/users/:userId
router.route('/:userId')
.get(getSingleUser)
.put(updateUser)
.delete(deleteUser);


module.exports = router;
