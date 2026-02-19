require('dotenv').config();
const express = require('express');
const expressLayout = require('express-ejs-layouts');
const connectDB = require('./server/config/db');

const app = express();
const port = process.env.PORT || 3000;

connectDB();

//forms
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//static files
app.use(express.static('public'));

app.use(expressLayout);
app.set('layout', 'layouts/main');
app.set('view engine', 'ejs');

// routes view
app.use('/', require('./server/routes/viewRoutes'));

// routes api
app.use('/api/tasks', require('./server/routes/apiRoutes'));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
