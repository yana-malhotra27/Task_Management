require('dotenv').config();
const express = require('express');
const expressLayout = require('express-ejs-layouts');
const connectDB = require('./server/config/db');

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

//forms
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//static files
app.use(express.static('public'));

//template engine
app.use(expressLayout);
app.set('layout', 'layouts/main');
app.set('view engine', 'ejs');

//Routes
app.use('/', require('./server/routes/user'));

//404
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});