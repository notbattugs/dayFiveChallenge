import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./Product";
import { Link } from "react-router-dom";
import Contact from "./Contact";
import Login from "./Login";
import Services from "./Services";
import App from "../App";
import logo from "../Assets/team..png";

const Header = ({ Logo, GridOne, GridTwo, GridThree, GridFour ,GridFive}) => {
  return (
    <BrowserRouter>
      <div className="header">
        <Link className="logo" to="./home">
          <img src={logo} alt="" />
        </Link>

        <div className="bar">
          {/* <BrowserRouter>
            <Routes>
              <Route path="/Product" element={<Products />} />
              <Route path="/Services" element={<Services />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Login" element={<Login />} />
              <button>Get access</button>
            </Routes>
            <Header />
          </BrowserRouter> */}
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
            <Link className="button" to="./getAccess">
              {GridFive}
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
