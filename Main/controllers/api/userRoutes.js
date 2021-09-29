const router = require('express').Router();
const { User } = require('../../models');

router.post('/signup', async (req, res) => {
  
  // try {
    const dbUserData = await User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
      years_collecting: req.body.years_collecting,
      age: req.body.age,
      favorite_fig: req.body.favorite_fig,
    });
    
    req.session.save(() => {
      req.session.logged_in = true;
      req.session.user.id = dbUserData.id;
      req.session.first_name = dbUserData.first_name;
      req.session.last_name = dbUserData.last_name;
      req.user = dbUserData;
      res.status(200).json(dbUserData);
    });
  // } catch (err) {
  //   console.log(err);
  //   res.status(500).json(err)
  // }
});


router.post('/login', async (req, res) => {
  // try {
  const userData = await User.findOne({ where: { email: req.body.email } });
  
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
        res.status(400).json(err);
      return;
    }

    req.session.save(() => {
      req.session.user.id = userData.id;
        req.session.first_name = userData.first_name;
       req.session.last_name = userData.last_name;
      req.user = userData;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });
    
  // } catch (err) {
  //   res.status(400).json(err);
  // }

});



router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});


module.exports = router;
