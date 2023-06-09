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
router.route('/').post(createThoughts);

router
    .route('/:userId')
    .post(createThoughts);

// /api/thoughts/:thoughtsId
router
  .route('/:thoughtsId')
  .get(getSingleThoughts)
  .put(updateThoughts)
  .delete(deleteThoughts);


module.exports = router;
