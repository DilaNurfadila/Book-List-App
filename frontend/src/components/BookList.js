import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import FuzzySearch from "fuzzy-search";
// import styles from "./style.module.css";

const BookList = () => {
  const [books, setBook] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    const response = await axios.get("http://localhost:5000/books");
    setBook(response.data);
  };

  const searchBook = async (e) => {
    try {
      e.preventDefault();
      var searchInput = document.getElementById("search");
      // var table = document.getElementById("table");
      // var tr = document.getElementsByTagNameNS("tr");
      console.log(searchInput.value);
      // const search = await axios.get("http://localhost:5000/books");
      const search = getBooks();
      // setBook(search.data);
      const fuse = new FuzzySearch(search, {
        includeScore: true,
        keys: ["book_title", "publisher", "genre"],
      });

      const results = fuse.search("java");
      console.log(results);
    } catch (error) {
      console.log(error);
    }
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
    <div className="coloumns">
      <div
        className="coloumn"
        onInput={searchBook}
        style={{
          marginBottom: 100,
        }}
      >
        <Link to="add" className="button is-success mt-4">
          Add New
        </Link>
        <div className="control">
          <input
            className="input mt-5"
            id="search"
            type="search"
            placeholder="Search (not working)"
            autoComplete="off"
          />
        </div>
        <table className="table is-bordered is-fullwidth mt-5" id="table">
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
