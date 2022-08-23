import Book from "../models/bookModel.js";

// const Book = require("../models/bookModel").default;

export const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.json(book);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const saveBook = async (req, res) => {
  const book = new Book(req.body);
  try {
    const insertedbook = await book.save();
    res.status(201).json(insertedbook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateBook = async (req, res) => {
  try {
    const updatedbook = await Book.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(updatedbook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteBook = async (req, res) => {
  try {
    const deletedbook = await Book.deleteOne({ _id: req.params.id });
    res.status(200).json(deletedbook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const searchBook = async (req, res) => {
  try {
    // const searchbook = await Book.find({ book_title: `*/${search.value}*/` });
    // res.json(searchbook);
    const query = req.params.query;

    Book.find(
      {
        $text: {
          $search: query,
        },
      },
      (err, result) => {
        if (err) throw err;
        if (result) {
          res.json(result);
        } else {
          res.send(
            JSON.stringify({
              error: "Error",
            })
          );
        }
      }
    );
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// app.get("/books/:query", cors(), (req, res) => {
//   const query = req.params.query;

//   Model.find(
//     {
//       $text: {
//         $search: query,
//       },
//     },
//     (err, result) => {
//       if (err) throw err;
//       if (result) {
//         res.json(result);
//       } else {
//         res.send(
//           JSON.stringify({
//             error: "Error",
//           })
//         );
//       }
//     }
//   );
// });
