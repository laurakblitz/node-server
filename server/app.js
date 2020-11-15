require('dotenv').config();
let express = require('express');
let app = express();
let sequelize = require('./db');

let journal = require("./controllers/journalcontroller");
let user = require('./controllers/usercontroller');

sequelize.sync();
//sequelize.sync({force: true})

app.use(require('./middleware/headers'))

app.use(express.json());

app.use('/user', user);
app.use('/journal', journal);

app.listen(3000, function(){
    console.log("App is listening on port 3000")
});

// require('dotenv').config();
// let express = require('express'); 
// let app = express(); 
// let sequelize = require('./db');

// let user = require('./controllers/usercontroller');
// let journal = require('./controllers/journalcontroller');

// sequelize.sync();

// app.use(require('./middleware/headers'));

// app.use(express.json());

// // *** EXPOSED ROUTE *** //
// app.use('/user', user);

// // *** PROTECTED ROUTE *** //
// app.use(require('./middleware/validate-session'));
// app.use('/journal', journal);


// app.listen(3000, function(){
//     console.log('App is listening on port 3000');
// });