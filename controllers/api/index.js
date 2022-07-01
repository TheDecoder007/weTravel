const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');
const homeRoutes = require('../home-routes');

router.use('/', homeRoutes);
router.use('/comments', commentRoutes);

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
module.exports = router;