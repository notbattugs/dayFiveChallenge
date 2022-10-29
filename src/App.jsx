import "./App.css";
import Header from "./Pages/Header";
import Content from "./Pages/Content";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./Pages/Product";
import { Link } from "react-router-dom";
import Contact from "./Pages/Contact";
import Login from "./Pages/LogIn";
import Services from "./Pages/Services";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="container">
      <div className="smallContainer">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
