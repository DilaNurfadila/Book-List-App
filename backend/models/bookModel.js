import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Book = mongoose.Schema({
  book_title: {
    type: String,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
});

const schemaName = new Schema(
  {
    book_title: String,
    publisher: String,
    genre: String,
  },
  {
    collection: "books",
  }
);

schemaName.index({ book_title: "text", publisher: "text", genre: "text" });

// const Model = mongoose.model("Model", schemaName);

const Books = mongoose.model("Books", Book);

// module.exports = Model;
// module.exports = Books;

// export default Model
export default Books;
