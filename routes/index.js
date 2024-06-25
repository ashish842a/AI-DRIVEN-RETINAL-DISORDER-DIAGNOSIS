const express = require('express');
const router = express.Router();
const { spawn } = require('child_process');

const authController = require("../controllers/authController")

// Import the JSON data
const eyeProblem = require("../utils/eye_problem.json");
const testinomial = require("../utils/testinomial.json")


// Function to call the Python script

// Function to call the Python script
function callPythonFunction(imagePath) {
    return new Promise((resolve, reject) => {
        const process = spawn('python', ['D:\\Nit_raipur\\CSVTU\\Project\\routes\\main.py', imagePath]);

        let output = '';
        let errorOutput = '';

        process.stdout.on('data', (data) => {
            output += data.toString();
        });

        process.stderr.on('data', (data) => {
            errorOutput += data.toString();
        });

        process.on('error', (error) => {
            console.error('Failed to start subprocess:', error);
            reject(error);
        });

        process.on('close', (code) => {
            console.log('Python script stderr:', errorOutput);  // Log stderr output
            if (code === 0) {
                resolve(output.trim());  // Resolve the trimmed output
            } else {
                reject(`Python script exited with code ${code}`);
            }
        });
    });
}

// Example route handler
router.get('/login', (req, res) => {
    console.log("login hit");

    res.render('login', { result });
   
});




// Define the route for the home page
router.get('/', (req, res) => {
    console.log("Index hit");

    // Example image path
    const imagePath = "D:\\Nit_raipur\\CSVTU\\Project\\public\\images\\eyeImages\\eye1.jpg";

    callPythonFunction(imagePath)
        .then(result => {
            console.log('Python function result:', result);

            // Render the 'index' view and pass the data to it
            res.render('index', { 
                eyeProblems: eyeProblem.eye_problems, 
                Testimonial: testinomial.treatments,
                result: result  // Pass the Python function result to the view
            });
        })
        .catch(error => {
            console.error('Error:', error);
            res.status(500).send('Internal Server Error');
        });
});

// router.get('/login',(req,res)=>{
//     console.log("login hit ");
//     res.render("login")
// })



router.post('/login', authController.loginUser);
router.post('/signup', authController.signupUser);
router.get('/logout', authController.logoutUser);

router.get('/signup',(req,res)=>{
    res.render("signup")
})

module.exports = router;
