import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bookRoute from "./routes/bookRoute.js";
// const Schema = mongoose.Schema;

const app = express();

// const schemaName = new Schema(
//   {
//     book_title: String,
//     publisher: String,
//     genre: String,
//   },
//   {
//     collection: "books",
//   }
// );

// schemaName.index({ book_title: "text", publisher: "text", genre: "text" });

// const Model = mongoose.model("Model", schemaName);

mongoose.connect("mongodb://localhost:27017/bookList", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Database connected"));

app.use(cors());
app.use(express.json());
app.use(bookRoute);
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

app.listen(5000, () => console.log("Server running"));
