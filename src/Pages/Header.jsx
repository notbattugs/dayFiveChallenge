import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./Product";
import { Link } from "react-router-dom";
import Contact from "./Contact";
import Login from "./LogIn";
import Services from "./Services";
import App from "../App";

const Header = () => {
  return (
    <div className="header">
      <Link className="logo" to="./home">
        Home
      </Link>
      <div className="bar">
        <Link className="page" to="./products">
          Products
        </Link>
        <Link className="page" to="./services">
          Services
        </Link>
        <Link className="page" to="./contact">
          Contact
        </Link>
        <Link className="page" to="./login">
          LogIn
        </Link>
      </div>
    </div>
  );
};

export default Header;
