const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');
const myBlogsRoutes = require('./myblogs-routes.js');
const createpostRoutes = require('./createpost-routes.js');

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/myblogs', myBlogsRoutes);
router.use('/createblog', createpostRoutes);
router.use('/api', apiRoutes);

module.exports = router;
