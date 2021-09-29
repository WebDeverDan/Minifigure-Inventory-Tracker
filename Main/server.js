const express = require('express');
const utils = require('./utils/auth');
const path = require('path');
const sequelize = require('./config/connection');
const routes = require('./controllers');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
//var db = require("./models");


const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;
// const hbs = exphbs.create({ helpers });

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};
app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars',  exphbs({defaultLayout:"main"}));
app.set('view engine', 'handlebars');

app.use(routes);
sequelize.sync({ force: false }).then(()=> {
    app.listen(PORT, () => console.log("Now Listening"));
});