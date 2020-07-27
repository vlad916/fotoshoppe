const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// app.get('/', (req, res) => {
//     res.send("We are online");
// });

app.listen(PORT, () => console.log(`Server listening on PORT ${PORT}`));