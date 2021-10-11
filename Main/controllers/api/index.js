const router = require('express').Router();
const userRoutes = require('./userRoutes');
const figureRoutes = require('./figureRoutes');
const kitRoutes = require('./kitRoutes');




router.use('/user', userRoutes);
router.use('/figure', figureRoutes);
router.use('/kit', kitRoutes);




module.exports = router;
