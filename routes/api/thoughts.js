const router = require('express').Router();
const {
  getThoughts,
  getSingleThoughts,
  createThoughts,
  updateThoughts,
  deleteThoughts,
} = require('../../controllers/thoughts.js');

// /api/thoughts
router.route('/').get(getThoughts);

// /api/thoughts/:thoughtsId
router
  .route('/:thoughtsId')
  .get(getSingleThoughts)
  .put(updateThoughts)
  .delete(deleteThoughts);

  router.route('/:userID').post(createThoughts);

module.exports = router;
