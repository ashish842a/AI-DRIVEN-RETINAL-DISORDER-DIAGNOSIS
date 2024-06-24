const express = require('express');
const router = express.Router();

// Import the JSON data
const eyeProblem = require("../utils/eye_problem.json");

// Define the route for the home page
router.get('/', (req, res) => {
    // Render the 'index' view and pass the 'eyeProblem' data to it
    res.render('index', { eyeProblems: eyeProblem.eye_problems });
});

module.exports = router;
