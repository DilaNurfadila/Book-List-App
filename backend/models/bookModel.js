import mongoose from "mongoose";

const Book = mongoose.Schema({
    book_title:{
        type: String,
        required: true
    },
    publisher:{
        type: String,
        required: true
    },
    genre:{
        type: String,
        required: true
    }
})

export default mongoose.model('Books', Book)