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

  return (
    <div className="columns">
      <div className="column is-half">
        <form onSubmit={saveBook}>
          <div className="field">
            <label className="label">Book Title</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={book_title}
                onChange={(e) => setBookTitle(e.target.value)}
                placeholder="Book Title"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">publisher</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={publisher}
                onChange={(e) => setPublisher(e.target.value)}
                placeholder="publisher"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Genre</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                placeholder="Genre"
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
