const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// app.get('/', (req, res) => {
//     res.send("We are online");
// });

// require('./routes/genres.js')(app);
// require('./routes/products.js')(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/photoequipment");


app.listen(PORT, () => console.log(`Server listening on PORT ${PORT}`));