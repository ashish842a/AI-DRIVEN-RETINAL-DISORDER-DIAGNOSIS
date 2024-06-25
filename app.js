const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const indexRouter = require('./routes/index');
const userRouter = require('./routes/userRoutes');
const User = require('./models/user');

const app = express();
const port = 3000;

// Set up mongoose connection
mongoose.connect('mongodb://localhost:27017/retina')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB', err);
  });

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(express.static('public'));

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Use the routes defined in the routes folder
app.use('/', indexRouter);
app.use('/users', userRouter); // Use the user routes
// const aboutRouter = require('./routes/about');
// const featuresRouter = require('./routes/features');
// const patientsRouter = require('./routes/patients');
// const expertsRouter = require('./routes/experts');
// const contactRouter = require('./routes/contact');
// const blogRouter = require('./routes/blog');

// app.use('/about', aboutRouter);
// app.use('/features', featuresRouter);
// app.use('/patients', patientsRouter);
// app.use('/experts', expertsRouter);
// app.use('/contact', contactRouter);
// app.use('/blog', blogRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
