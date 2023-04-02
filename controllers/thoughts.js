const { User, Thoughts } = require('../models');

module.exports = {
  // Get all courses
  getThoughts(req, res) {
    Thoughts.find({})
      .then((thougtsData) => res.json(thougtsData))
      .catch((err) => res.status(500).json(err));
  },
  // Get a course
  getSingleThoughts(req, res) {
    Thoughts.findOne({ id: req.params._id })
      .select('-__v')
      .then((thougtsData) =>
        !thougtsData
          ? res.status(404).json({ message: 'No thoughts with that ID' })
          : res.json(thougtsData)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Create a course
  createThoughts(req, res) {
    Thoughts.create(req.body)
      .then((thougtsData) => res.json(thougtsData))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Delete a course
  deleteThoughts(req, res) {
    Thoughts.findOneAndDelete({ id: req.params._id })
    .select('-__v')
      .then((thougtsData) =>
        !thougtsData
          ? res.status(404).json({ message: 'No thoughts with that ID' })
          : User.deleteMany({ _id: { $in: thoughts.user } })
      )
      .then(() => res.json({ message: 'Thoughts and User deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
  // Update a course
  updateThoughts(req, res) {
    Thoughts.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thougtsData) =>
        !thougtsData
          ? res.status(404).json({ message: 'No thoughts with this id!' })
          : res.json(course)
      )
      .catch((err) => res.status(500).json(err));
  },
};
