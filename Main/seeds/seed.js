const sequelize = require('../config/connection');
const { User, Figure, Set  } = require('../models');

const userData = require('./userData.json');
const figureData = require('./figureData.json');


const seedAll = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  // await Collection.bulkCreate(collectionData, {
  //   individualHooks: true,
  //   returning: true,
  // });

  await Figure.bulkCreate(figureData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedAll();
