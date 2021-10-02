const router = require('express').Router();
const { Figure, User } = require('../../models');
const withAuth = require ('../../utils/auth')

// create new figure
router.post('/', withAuth, async (req, res) => {
  // try {
    console.log(req.body)
    const newFigure = await Figure.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newFigure);
  // } catch (err) {
  //   res.status(400).json(err);
  // }
});

// get all figures that the current user has
router.get('/', withAuth,async (req, res) => {
  console.log(req.session.user_id);
  try {
    const currentUser = await User.findOne({ where: { id: req.session.user_id } });
    const currUser = currentUser.get({ plain: true });
    console.log(currUser)
    const figureData = await Figure.findAll({
      where: { figure_name: currUser.figure_name}
    });

    // Serialize data so the template can read it
    const figures = figureData.map((project) => project.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('myFigures', { 
      figures, 
      currentUser: currUser,
      logged_in: req.session.logged_in 
    });
    return(currUser, figureData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete figure
// router.delete('/figure/delete/:id', async (req, res) => {
//   try {
//     const figureData = await Figure.destroy({
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });

//     if (!figureData) {
//       res.status(404).json({ message: 'No figure found with this id!' });
//       return;
//     }

//     res.status(200).json(figureData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
