const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Sets up the port for the server
const PORT = process.env.PORT || 5000;

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(cors());

// Routes
require("./startup/routes")(app);

// Mongodv connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/photoequipment", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Starts the server
app.listen(PORT, () => console.log(`Server listening on PORT ${PORT}`));