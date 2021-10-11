const router = require('express').Router();
const { User, Figure, Kit } = require('../models');
const withAuth = require('../utils/auth');
const sequelize = require('sequelize');
const { ForeignKeyConstraintError, SequelizeScopeError } = require('sequelize');
var helpers = require('handlebars-helpers');
var math = helpers.math();

// loads homepage upon login
router.get('/', withAuth, async (req, res) => {
  console.log(req.session.user_id);

  // try {
    const currentUser = await User.findOne({
      where: { id: req.session.user_id },
    });
  
    const figureData = await Figure.count({
      where: { id: req.session.user_id},
    });

    // // total quantity of sets
    const kitTotal = await Kit.sum('quantity', {
      where: {user_id: req.session.user_id }
    });
    
    // // total value of sets
    // const kitValue = await Kit.sum('value', {
    //   where: {user_id: req.session.user_id }
    // });

    // const kitTotalIndiv = kitTotal ** kitValue;
    // // total value for each figure entry
    

    // total figure quantity
    const figTotal = await Figure.sum('quantity', {
      where: {user_id: req.session.user_id }
    });

    // total value of figures
    const figValue = await Figure.sum('total_v', {
      where: {user_id: req.session.user_id }
    });
    const kitValue = await Kit.sum('total_v', {
      where: {user_id: req.session.user_id }
    })
  

    const collectionValue = kitValue + figValue;
    // console.log(collectionValue)

    const kitData = await Kit.findAll({
    where: {id: req.session.user_id }
    });
    // console.log(kitData);

    const currUser = currentUser.get({ plain: true });
    console.log(currUser);
    
    // const users = userData.map((user) => user.get({ plain: true }));
    
    res.render('homepage', {
      // users,
      currentUser: currUser,
      figureData: figureData,
      itData: kitData,
      kitTotal: kitTotal,
      kitValue: kitValue,
      figValue: figValue,
      figTotal: figTotal,
      
      
      
      
      collectionValue: collectionValue,
      
      logged_in: req.session.logged_in,
    });
    return currUser;
  // } catch (err) {
  //   res.status(500).json(err);
  // }
});

router.get('/myFigures', withAuth, async (req, res) => {
 
    const figureData = await Figure.findAll({
      where: { user_id: req.session.user_id}
    });

    const figValue = await Figure.sum('total_v', {
      where: {user_id: req.session.user_id }
    });

    const figures = figureData.map((figure) => figure.get({ plain: true }));
  
    res.render('myFigures', {
      figures,
      figValue: figValue,
      logged_in: req.session.logged_in 
    });

    // return(currUser, userData);
  // } catch (err) {
  //   res.status(500).json(err);
  // }
});

router.get('/mySets', withAuth, async (req, res) => {
  // console.log(req.session.user_id);
  // try {
    // Find the logged in user based on the session ID
    // const currentUser = await User.findOne({ where: { id: req.session.user_id } });
    // const currUser = currentUser.get({ plain: true });
    // console.log(currUser)
    const setData = await Kit.findAll({
      where: { user_id: req.session.user_id}
    });
    const kitTotal = await Kit.sum('quantity', {
      where: {user_id: req.session.user_id }
    });
    
    // // total value of sets
    // const kitValue = await Kit.sum('value', {
    //   where: {user_id: req.session.user_id }
    // });
    const kitValue = await Kit.sum('total_v', {
      where: {user_id: req.session.user_id }
    })

    

    const kitTotalIndiv = kitTotal ** kitValue;

    const kits = setData.map((set) => set.get({ plain: true }));
  
    res.render('mySets', {
      kits,
      kitTotal: kitTotal,
      kitTotalIndiv: kitTotalIndiv, 
      kitValue: kitValue,
      logged_in: req.session.logged_in 
    });

    // return(currUser, userData);
  // } catch (err) {
  //   res.status(500).json(err);
  // }
});

router.get('/editFigure/:id', withAuth, async (req, res) => {
  // console.log(req.session.user_id);
  // try {
    // Find the logged in user based on the session ID
    // const currentUser = await User.findOne({ where: { id: req.session.user_id } });
    // const currUser = currentUser.get({ plain: true });
    // console.log(currUser)
    const figureData = await Figure.findByPk(req.params.id);

    const figure = figureData.get({ plain: true });
  
    res.render('editFigure', {
      figure,
      logged_in: req.session.logged_in 
    });

    // return(currUser, userData);
  // } catch (err) {
  //   res.status(500).json(err);
  // }
});

router.get('/editSet/:id', withAuth, async (req, res) => {
  // console.log(req.session.user_id);
  // try {
    // Find the logged in user based on the session ID
    // const currentUser = await User.findOne({ where: { id: req.session.user_id } });
    // const currUser = currentUser.get({ plain: true });
    // console.log(currUser)
    const kitData = await Kit.findByPk(req.params.id);

    const kit = kitData.get({ plain: true });
  
    res.render('editSet', {
      kit,
      logged_in: req.session.logged_in 
    });

    // return(currUser, userData);
  // } catch (err) {
  //   res.status(500).json(err);
  // }
});




// will delete a figure - currently not a delete button
// router.delete('/delete/:id', async (req, res) => {
//   try {
//     const userData = await User.destroy({
//       where: { id: req.params.id },
//     });

//     if (!userData) {
//       res.status(404).json({ message: 'No user found with this id!' });
//       return;
//     }

//     res.status(200).json(userData);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });
// these are for rendering the display
router.get('/myFigures', (req, res) => {
  console.log('myFigures', req.session.logged_in, req.session.user_id);
  res.render('myFigures', { logged_in: req.session.logged_in });
});
router.get('/addFigure', (req, res) => {
  console.log('addFigure');
  res.render('addFigure', { logged_in: req.session.logged_in });
});
router.get('/editFigure', (req, res) => {
  console.log('editFigure', req.session.logged_in, req.session.user_id);
  res.render('editFigure', { logged_in: req.session.logged_in });
});
router.get('/mySets', (req, res) => {
  console.log('mySets');
  res.render('mySets', { logged_in: req.session.logged_in });
});
router.get('/addSet', (req, res) => {
  console.log('addSet');
  res.render('addSet', { logged_in: req.session.logged_in });
});
router.get('/editSet', (req, res) => {
  console.log('editSet', req.session.logged_in, req.session.user_id);
  res.render('editSet', { logged_in: req.session.logged_in });
});
router.get('/resources', (req, res) => {
  console.log('resources');
  res.render('resources', { logged_in: req.session.logged_in });
});
router.get('/login', (req, res) => {
  console.log('login');
  res.render('login');
});
router.get('/signup', (req, res) => {
  console.log('signup');
  res.render('signup');
});

module.exports = router;
