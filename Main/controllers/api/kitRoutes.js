const router = require('express').Router();
const { Kit, User } = require('../../models');
const withAuth = require ('../../utils/auth')

// create new set
router.post('/', withAuth, async (req, res) => {
  // try {
    console.log(req.body)
    const newSet = await Kit.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newSet);
  // } catch (err) {
  //   res.status(400).json(err);
  // }
});

router.put('/:id', withAuth, async (req, res) => {
  console.log(req.body);
  // try {
  const kitData = await Kit.update(req.body, {
    where: {
      id: req.params.id,
    },
  });

  if (!kitData) {
    res.status(404).json({ message: 'No set found with this id!' });
    return;
  }

  res.status(200).json(kitData);
  // } catch (err) {
  //   res.status(500).json(err);
  // }
});


// delete set
router.delete('/:id', async (req, res) => {
  try {
    const kitData = await Kit.destroy({
      where: {
        id: req.params.id,
        // user_id: req.session.user_id,
      },
    });
    
    if (!kitData) {
      res.status(404).json({ message: 'No figure found with this id!' });
      return;
    }

    res.status(200).json(kitData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
