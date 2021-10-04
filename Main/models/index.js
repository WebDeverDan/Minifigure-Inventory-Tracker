const User = require('./user');
const Figure = require('./figure');
const Set = require('./set');


User.hasMany(Figure, {
  foreignKey: 'user_id',
});

Figure.belongsTo(User, {
  foreignKey:'user_id',
});

User.hasMany(Set, {
  foreignKey: 'user_id',
});

Set.belongsTo(User, {
  foreignKey: 'user_id',
})



module.exports = { User, Figure, Set };
