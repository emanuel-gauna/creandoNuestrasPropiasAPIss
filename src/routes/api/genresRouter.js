const express = require('express')
const router = express.Router();
const {list , genre } = require('../../controllers/api/genresController');

router.get('/api/genres', list);
router.get('/api/genres/:id', genre);


module.exports = router;

