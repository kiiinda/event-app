const express = require("express");
require("./db/mongoose");
const Place = require("./models/place");

const app = express();
const port = process.env.PORT || 5000 //create server

app.use(express.json());

app.post('/places', (req, res) => {
    const place = new Place(req.body);// instance

    place
    .save()
    .then(()=> {
        res.status(200).send(place);
    })
    .catch((error) =>{
        res.status(400).send(error)
    });
});

app.listen(port, () =>{
    console.log("Server is running on port" + port);
});