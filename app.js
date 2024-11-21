const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5500;

// Middleware setup
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/portfolio', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB:', err));

// Define a Mongoose schema for contact form messages
const messageSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    date: { type: Date, default: Date.now }
});

// Create a model from the schema
const Message = mongoose.model('Message', messageSchema);

// Define the contact form endpoint
app.post('/contact', async (req, res) => {
    const { name, email, message } = req.body;
    
    // Create a new message document
    const newMessage = new Message({ name, email, message });

    try {
        await newMessage.save();
        res.json({ status: "success", message: "Message received successfully!" });
    } catch (error) {
        console.error("Error saving message:", error);
        res.json({ status: "error", message: "Failed to send the message." });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
