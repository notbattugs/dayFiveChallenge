import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./Product";
import { Link } from "react-router-dom";
import Contact from "./Contact";
import Login from "./LogIn";
import Services from "./Services";
import App from "../App";

const Header = ({ Logo, GridOne, GridTwo, GridThree, GridFour }) => {
  return (
    <BrowserRouter>
      <div className="header">
        <Link className="logo" to="./home">
          {Logo}
        </Link>
        <div className="bar">
          <Link className="page" to="./products">
            {GridOne}
          </Link>
          <Link className="page" to="./services">
            {GridTwo}
          </Link>
          <Link className="page" to="./contact">
            {GridThree}
          </Link>
          <Link className="page" to="./login">
            {GridFour}
          </Link>
        </div>
      </div>

      <Routes>
        <Route path="./App" element={<App />} />
        <Route path="./products" element={<Products />} />
        <Route path="./services" element={<Services />} />
        <Route path="./contact" element={<Contact />} />
        <Route path="./login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Header;
