import { Link } from "react-router-dom";

export function Navbar() {


  return (
    <nav className=" navbar navbar-expand-md bg-dark navbar-dark">
      <div className="container">
        <Link to={"/students"} className=" text-white navbar-brand">
          {/* <i class="me-2 fa-solid fa-graduation-cap"></i> */}
          <img
            src="/image/formik logo.png"
            alt="swasticblog"
            style={{ width: "8rem", height: "4rem" }}
          />
        </Link>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#mynav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="mynav">
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item active ">
              <Link to={"/"} className="nav-link text-primary">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/books"} className="nav-link text-warning">
                Books
              </Link>
            </li>
            <li className="nav-item  ">
              <Link to={"/addbooks"} className="nav-link text-success">
                Add Book
              </Link>
            </li>
            <li className="nav-item ">
              <Link to={"/books/take"} className="nav-link text-danger">
                Return Book
              </Link>{" "}
            </li>

            {/* <li class="nav-item active"> <a class="nav-link" href="#">Login</a></li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}