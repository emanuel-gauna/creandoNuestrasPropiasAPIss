const express = require('express')
const router = express.Router();
const { create , destroy, list } = require('../../controllers/api/moviesController');

router.get('/api/movies', list);
router.post('/api/movies/create', create);
router.delete('/api/movies/delete/:id', destroy);


module.exports = router;

