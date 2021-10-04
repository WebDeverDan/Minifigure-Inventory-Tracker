const router = require('express').Router();
const { User, Figure, Set } = require('../models');
const withAuth = require('../utils/auth');

// loads homepage upon login
router.get('/', withAuth, async (req, res) => {
  console.log(req.session.user_id);

  try {
    // Get all suggested matches and JOIN with user data
    const currentUser = await User.findOne({
      where: { id: req.session.user_id },
    });
    const currUser = currentUser.get({ plain: true });
    console.log(currUser);
    //console.log(currentUser);

    // Serialize data so the template can read it
    // const users = userData.map((user) => user.get({ plain: true }));
    // Pass serialized data and session flag into template
    res.render('homepage', {
      // users,
      currentUser: currUser,
      logged_in: req.session.logged_in,
    });
    return currUser;
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/myFigures', withAuth, async (req, res) => {
  // console.log(req.session.user_id);
  // try {
    // Find the logged in user based on the session ID
    // const currentUser = await User.findOne({ where: { id: req.session.user_id } });
    // const currUser = currentUser.get({ plain: true });
    // console.log(currUser)
    const figureData = await Figure.findAll({
      where: { user_id: req.session.user_id}
    });

    const figures = figureData.map((figure) => figure.get({ plain: true }));
  
    res.render('myFigures', {
      figures,
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
    const setData = await Set.findAll({
      where: { user_id: req.session.user_id}
    });

    const sets = setData.map((set) => set.get({ plain: true }));
  
    res.render('mySets', {
      sets,
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
