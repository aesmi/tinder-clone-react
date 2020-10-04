import express from 'express';
import mongoose from 'mongoose';
//cors used to add headers to requests
import Cors from 'cors';
import Cards from "./models/dbCards.js"

//App Config
const app = express();
const port = process.env.PORT || 8001;


//Middlewares
//app.use(middleware) this express function mounts middleware onto our server
app.use(express.json())
app.use(Cors());

//DB config
const MONGOOSE_CONFIG = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
}
//mongoose connect
mongoose.connect(connection_url, MONGOOSE_CONFIG);

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

app.delete('/tinder/cards:id', (req, res) => {
    Cards.find((err, data) => {
        if (err) {
            res.status(404).send(err);
        } else {
            res.status(200).delete(data);
        }
    })
})

//Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));
