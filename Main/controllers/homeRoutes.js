const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', withAuth, async (req, res) => {
  console.log(req.session.user_id);
  
  try {
    // Serialize data so the template can read it
    const users = userData.map((user) => user.get({ plain: true }));
    const currentUser = await User.findOne({ where: { id: req.session.user_id } });
    const currUser = currentUser.get({ plain: true });
    // Pass serialized data and session flag into template
    res.render('dashboard', {
      users,
      currentUser: currUser,
      logged_in: req.session.logged_in 
    });
    // console.log(req.session.user_id);
    return(currUser, userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.delete('/delete/:id', async (req, res) => {
//   try{
//     const userData = await User.destroy({
//       where: { id: req.params.id,
//                   }});

//     if (!userData) {
//       res.status(404).json({ message: 'No user found with this id!' });
//       return;
//     }

//     res.status(200).json(userData);
//   } catch (err) {
//     console.log("helloworld")
//     console.log(err)
//     res.status(500).json(err);
//   }
// });

router.get('/login', (req, res) => {
console.log("login")
  res.render('login');
});

router.get('/signup', (req, res) => {
    console.log("signup")
    res.render('signup');
});

// router.get('/dashboard', (req, res) => {
//     console.log("dashboard")
//       res.render('dashboard');
// });


module.exports = router;
