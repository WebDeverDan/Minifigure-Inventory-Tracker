const User = require('./user');
const Figure = require('./figure');
const Sets = require('./sets');


User.hasMany(Figure, {
  foreignKey: 'user_id',
});

Figure.belongsTo(User,{
  foreignKey:'user_id',
})

User.hasMany(Sets, {
  foreignKey: 'user_id',
});



module.exports = { User, Figure, Sets };
