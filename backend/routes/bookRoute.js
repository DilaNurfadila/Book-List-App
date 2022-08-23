import express from "express";
import {
  getBooks,
  getBookById,
  saveBook,
  updateBook,
  deleteBook,
  searchBook,
} from "../controllers/bookController.js";

const router = express.Router();

router.get("/books", getBooks);
router.get("/books/:id", getBookById);
router.post("/books", saveBook);
router.patch("/books/:id", updateBook);
router.delete("/books/:id", deleteBook);
router.get("/books", searchBook);
router.get("/books/:query");

export default router;
