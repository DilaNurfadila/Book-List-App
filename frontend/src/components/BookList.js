import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import styles from './../css/style.module.css'

const BookList = () => {
  const [books, setBook] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    const response = await axios.get("http://localhost:5000/books");
    setBook(response.data);
  };

  const deleteBook = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/books/${id}`);
      getBooks();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns">
      <div className="column">
        <Link to="add" className="button is-success mt-4">
          Add New
        </Link>
        <table className="table is-bordered is-fullwidth mt-5">
          <thead>
            <tr>
              <th className="has-text-centered">No</th>
              <th className="has-text-centered">Book Title</th>
              <th className="has-text-centered">Publisher</th>
              <th className="has-text-centered">Genre</th>
              <th colSpan={2} className="has-text-centered">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={book._id} className="has-text-centered">
                <td>{index + 1}</td>
                <td>{book.book_title}</td>
                <td>{book.publisher}</td>
                <td>{book.genre}</td>
                <td>
                  <Link
                    to={`edit/${book._id}`}
                    className="button is-info is-small"
                  >
                    Edit
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => {
                      const confirm = window.confirm("Are you sure?");
                      if (confirm === true) {
                        deleteBook(book._id);
                      }
                    }}
                    className="button is-danger is-small"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookList;
