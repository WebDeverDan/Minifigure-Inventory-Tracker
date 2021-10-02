const User = require('./user');
const Figure = require('./figure');
const Set = require('./set')


User.hasMany(Figure, {
  foreignKey: 'user_id',
});

User.hasMany(Set, {
  foreignKey: 'user_id',
});

// Figure.belongsToMany(User, {
//   foreignKey: 'figure_id'
// })

// Set.belongsToMany(User, {
//   foreignKey: 'set_id'
// })



module.exports = { User, Figure, Set };
