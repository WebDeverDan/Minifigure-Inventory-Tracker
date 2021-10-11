const User = require('./user');
const Figure = require('./figure');
const Kit = require('./kit');


User.hasMany(Figure, {
  foreignKey: 'user_id',
});

Figure.belongsTo(User, {
  foreignKey:'user_id',
});

User.hasMany(Kit, {
  foreignKey: 'user_id',
});

Kit.belongsTo(User, {
  foreignKey: 'user_id',
})



module.exports = { User, Figure, Kit };
