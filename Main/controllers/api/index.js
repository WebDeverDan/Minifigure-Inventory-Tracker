const router = require('express').Router();
const userRoutes = require('./userRoutes');
const figureRoutes = require('./figureRoutes');
const setRoutes = require('./setRoutes');




router.use('/user', userRoutes);
router.use('/figure', figureRoutes);
router.use('/set', setRoutes);




module.exports = router;
