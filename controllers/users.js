const { User, Thoughts } = require('../models');

module.exports = {
  // Get all users
  getUser(req, res) {
    User.find({})
    //   .populate({
    //     path: 'thoughts',
    //     select: ('-__v')
    // })
    .select('-__v')
    .then((userData) => res.json(userData))
    .catch((err) => res.status(500).json(err));
},
  // Get a single user
  getSingleUser(req, res) {
    User.findOne({ id: req.params._id  })
    .populate({
      path: "thoughts",
      select: "-__v",
    })
    .select("-__v")
    .then((userData) =>
    !userData
      ? res.status(404).json({ message: 'No user with that ID' })
      : res.json(thougtsData)
  )
  .catch((err) => res.status(500).json(err));
},
  // create a new user
  createUser(req, res) {
    User.create(req.body)
    .then((userData) => res.json(userData))
    .catch((err) => {
      console.log(err);
      return res.status(500).json(err);
    });
  },

  updateUser(req, res) {
    User.findOneAndUpdate({_id: req.params.id}, body, {new: true, runValidators: true})
  .then(userData => {
    if (!userData) {
      res.status(404).json({message: 'No user found with this ID'});
      return;
    }
    res.json(userData);
  })
    .catch(err => res.json(err))
  },
  // Delete a user 
  deleteUser(req, res) {
    User.findOneAndDelete({ id: req.params._id })
      .then((userData) =>
        !userData
          ? res.status(404).json({ message: 'No such user exists' })
          : res.json({ message: 'User successfully deleted' })
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  createFriend({ params }, res) {
    User.findByIdAndUpdate(
      { id: params._id },
      { $addToSet: { friends: params.friendId } },
      { new: true }
    )
      .select("-__v")
      .then((userData) => {
        if (!userData) {
          res.status(404).json({ message: "No friend with this ID exists" });
          return;
        }
        res.json(userData);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },
  deleteFriend({ params }, res) {
    User.findByIdAndUpdate(
      { id: params._id },
      { $pull: { friends: params.friendId } },
      { new: true, runValidators: true }
    )
      .select("-__v")
      .then((userData) => {
        if (!userData) {
          res.status(404).json({ message: "No friend with this ID exists" });
          return;
        }
        res.json(userData);
      })
      .catch((err) => res.status(400).json(err));
  },
};
