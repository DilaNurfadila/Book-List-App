import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";

const EditBook = () => {
  const [book_title, setBookTitle] = useState("");
  const [publisher, setPublisher] = useState("");
  const [genre, setGenre] = useState("");
  const Navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getBookById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getBookById = async () => {
    const response = await axios.get(`http://localhost:5000/books/${id}`);
    setBookTitle(response.data.book_title);
    setPublisher(response.data.publisher);
    setGenre(response.data.genre);
  };

  const updateBook = async (e) => {
    e.preventDefault();
    try {
      const confirm = window.confirm("The data you entered is correct?");
      if (confirm === true) {
        await axios.patch(`http://localhost:5000/books/${id}`, {
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
        <form onSubmit={updateBook}>
          <div className="field">
            <label className="label">Book Title</label>
            <div className="control">
              <input
                type="text"
                className="input"
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
                value={publisher}
                onChange={(e) => setPublisher(e.target.value)}
                placeholder="Publisher"
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
                  Update
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBook;
