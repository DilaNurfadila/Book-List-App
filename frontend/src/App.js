import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";
import EditBook from "./components/EditBook";

function App() {
  return (
    <BrowserRouter>
      <nav
        className="navbar is-dark has-shadow"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item" href="#">
            <h1>Example Navbar (Not Modified)</h1>
          </a>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">Home</a>

            <a className="navbar-item">Documentation</a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">More</a>

              <div className="navbar-dropdown">
                <a className="navbar-item">About</a>
                <a className="navbar-item">Jobs</a>
                <a className="navbar-item">Contact</a>
                <hr className="navbar-divider" />
                <a className="navbar-item">Report an issue</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <h1 className="has-text-centered is-size-1">Book List</h1>
      <div className="container">
        <Routes>
          <Route path="/" element={<BookList />}></Route>
          <Route path="add" element={<AddBook />}></Route>
          <Route path="edit/:id" element={<EditBook />}></Route>
        </Routes>
      </div>
      <footer
        className="footer is-dark has-shadow"
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          marginTop: 50,
          padding: 20,
          backgroundColor: "hsl(0, 0%, 21%)",
          color: "white",
        }}
      >
        <div className="content has-text-centered">
          <p>
            Copyright &copy; 2022 All Right Reserved. Created by{" "}
            <strong
              style={{
                color: "white",
              }}
            >
              Someone from Another World
            </strong>
          </p>
        </div>
      </footer>
    </BrowserRouter>
  );
}

export default App;
