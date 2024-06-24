const express = require('express');
const app = express();
const port = 3000;

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Serve static files from the "public" directory
app.use(express.static('public'));

// Use the routes defined in the routes folder
const indexRouter = require('./routes/index');
// const aboutRouter = require('./routes/about');
// const featuresRouter = require('./routes/features');
// const patientsRouter = require('./routes/patients');
// const expertsRouter = require('./routes/experts');
// const contactRouter = require('./routes/contact');
// const blogRouter = require('./routes/blog');

app.use('/', indexRouter);
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
