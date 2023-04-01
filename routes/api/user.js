const router = require('express').Router();
const {
  getUser,
  getSingleUser,
  updateUser,
  createUser,
  deleteUser,
  createFriend,
  deleteFriend
} = require('../../controllers/users.js');

// /api/users
router.route('/').get(getUser);
router.route('/').post(createUser);


// /api/users/:userId
router.route('/:userId')
.get(getSingleUser)
.put(updateUser)
.delete(deleteUser);

router.route('/id/friends/:friendId')
.post(createFriend)
.delete(deleteFriend);


module.exports = router;
