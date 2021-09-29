const User = require('./user');
const Figure = require('./figure');
// const Collection = require('./collection');

Figure.belongsTo(User, {
  foreignKey: 'figure_id'
});

// Collection.belongsTo(User, {
//   foreignKey: 'collection_id',
// })

User.hasMany(Figure, {
  foreignKey: 'user_id',
});





module.exports = { User, Figure};
