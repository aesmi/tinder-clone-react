import mongoose from "mongoose";

const cardsSchema = mongoose.Schema({
    message: [{
        author_name: String,
        author_id: Number,
        author_profile_pic: ImageData,
        message_content: String
    }]
})

export default mongoose.model('chats', chatsSchema);