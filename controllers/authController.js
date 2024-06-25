const User = require('../models/user');
const bcrypt = require('bcrypt');
const saltRounds = 10;

// Controller to handle user login
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Find the user by email or phone
    const user = await User.findOne({ email: email });
    console.log("user ta login ",user);

    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
   

    // Login successful, redirect to home page or send a success response
    res.status(200).json({ success: true, message: 'Login successful' });
    // res.redirect("/")

    // res.redirect("/")
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Controller to handle user signup
exports.signupUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if the user already exists
    let existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists with this email' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create a new user record
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

   
    // Return success response
    // res.status(201).json({ message: 'User created successfully', user: newUser });
    res.redirect("/")
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
};

// Controller to handle user logout
exports.logoutUser = async (req, res) => {
    try {
    //   req.session.destroy((err) => {
    //     if (err) {
    //       return res.status(500).json({ message: 'Failed to logout', error: err });
    //     }
    //     res.clearCookie('connect.sid'); // Clear the session cookie
    //     res.redirect('/login'); // Redirect to the login page or any other appropriate page
    //   });
      res.redirect('/login');
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  };
  