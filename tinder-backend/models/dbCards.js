import mongoose from "mongoose";

const cardsSchema = mongoose.Schema({
    name: String,
    imgUrl: String,
    misc: [{occupation: String, school: String}],
    stats: [{age: String, height: String}],
    location: [{country: String, city: String}],
    description: String
})

export default mongoose.model('cards', cardsSchema);