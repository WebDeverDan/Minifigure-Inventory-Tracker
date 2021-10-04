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

router.put('/update/:id', withAuth, async(req, res) => {
  console.log(req.body)
  // try {
    const figureData = await Figure.update({
      ...req.body,
    },
    {
     where: {
        id: req.params.id,
        // user_id: req.session.user_id,
      },
    }
    );

    if (!figureData) {
      res.status(404).json({ message: 'No figure found with this id!' });
      return;
    }

    res.status(200).json(figureData);
  // } catch (err) {
  //   res.status(500).json(err);
  // }
})




// delete figure
router.delete('/figure/delete/:id', async (req, res) => {
  try {
    const figureData = await Figure.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!figureData) {
      res.status(404).json({ message: 'No figure found with this id!' });
      return;
    }

    res.status(200).json(figureData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
