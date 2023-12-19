const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB (Make sure MongoDB is running)
mongoose.connect('mongodb://localhost:27017/signup-demo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a user schema
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Serve signup page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/SignUp.html');
});

// Handle signup form submission
app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  // Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.send('User with this email already exists.');
  }

  // Create a new user
  const newUser = new User({ username, email, password });
  await newUser.save();

  res.send('Signup successful!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
