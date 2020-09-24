import express from 'express';
import mongoose from 'mongoose';
//cors used to add headers to requests
import Cors from 'cors';

import Cards from "./dbCards.js"

//App Config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = "mongodb+srv://admin:vCC229saHbTL0CoO@cluster0.tpllr.mongodb.net/tinderdb?retryWrites=true&w=majority"

//Middlewares
app.use(express.json());
app.use(Cors());

//DB config
const MONGOOSE_CONFIG = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
}

mongoose.connect(connect_url, MONGOOSE_CONFIG);


//API Endpoints
//get("route"<String>, (req,res) callback function)
app.get('/', (req, res) => res.status(200).send('Hello World!'));
app.post('/tinder/cards', (req, res) => {
    const dbCard = req.body;
    Cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201);
        }
    })
})
app.get('/tinder/cards', (req, res) => {
    Cards.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    })
})

//Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));