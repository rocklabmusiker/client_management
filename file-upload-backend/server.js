const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors()); // Enable CORS for all routes

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/fileUploadDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const FileSchema = new mongoose.Schema({
  filename: String,
});

const File = mongoose.model('File', FileSchema);

// Multer setup for disk storage
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/'); // specify the directory to save files
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname); // specify the name of the saved file
    }
});

const upload = multer({ storage: storage });

app.post('/upload', upload.array('files'), async (req, res) => {
    const fileNames = req.files.map(file => ({ filename: file.originalname }));
    await File.insertMany(fileNames);
    res.send('Files uploaded successfully');
});

app.get('/fileCount', async (req, res) => {
    const fileCount = await File.countDocuments();
    res.json({ count: fileCount });
});

app.listen(5000, () => {
    console.log('Server started on http://localhost:5000');
});
