const express = require('express');

const PORT = process.env.PORT || 5000;

const app = express();



app.get('/', (req, res) => {
    res.send("We are online");
});

app.listen(PORT, () => console.log(`Server listening on PORT ${PORT}`));