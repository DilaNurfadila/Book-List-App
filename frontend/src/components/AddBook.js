import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const AddBook = () => {
  const [book_title, setBookTitle] = useState("");
  const [publisher, setPublisher] = useState("");
  const [genre, setGenre] = useState("");
  const Navigate = useNavigate();

  const saveBook = async (e) => {
    e.preventDefault();
    try {
      const confirm = window.confirm("The data you entered is correct?");
      if (confirm === true) {
        await axios.post("http://localhost:5000/books", {
          book_title,
          publisher,
          genre,
        });
        Navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const input = async (ev) => {
    ev.preventDefault();
    var book_title = document.getElementById("book-title");
    var publisher = document.getElementById("publisher");
    var genre = document.getElementById("genre");
    console.log(book_title.value);
    console.log(publisher.value);
    console.log(genre.value);
  };

  return (
    <div className="columns">
      <div className="column is-half">
        <form onSubmit={saveBook} onInput={input}>
          <div className="field">
            <label className="label">Book Title</label>
            <div className="control">
              <input
                type="text"
                className="input"
                id="book-title"
                value={book_title}
                onChange={(e) => setBookTitle(e.target.value)}
                placeholder="Book Title"
                required={true}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Publisher</label>
            <div className="control">
              <input
                type="text"
                className="input"
                id="publisher"
                value={publisher}
                onChange={(e) => setPublisher(e.target.value)}
                placeholder="publisher"
                required={true}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Genre</label>
            <div className="control">
              <input
                type="text"
                className="input"
                id="genre"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                placeholder="Genre"
                required={true}
              />
            </div>
            <div className="field">
              <div className="control mt-5">
                <Link to="/" className="button is-primary">
                  Back
                </Link>
                <button type="submit" className="button is-success ml-5">
                  Save
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
