const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/yourDatabase', {
  useNewUrlParser: true, // Keep this if needed for older Node.js versions
}).then(() => {
  console.log('MongoDB connected successfully');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

// Define user schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,  // Ensures that name is required
    trim: true       // Trims whitespace
  },
  email: {
    type: String,
    required: true,  // Ensures that email is required
    unique: true,    // Ensures that email is unique
    lowercase: true, // Converts email to lowercase
    trim: true       // Trims whitespace
  },
  password: {
    type: String,
    required: true   // Ensures that password is required
  }
});

// Create User model
const User = mongoose.model('User', userSchema);


// Export User model
module.exports = User;
