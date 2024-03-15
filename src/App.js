import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Services from "./components/Page-Service/Services";
import Products from "./components/Page-Products/Products";
import SignUp from "./components/Page-SignUp/Signup";
import Login from "./components/Page-Login/Login";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/services" exact Component={Services} />
          <Route path="/products" exact Component={Products} />
          <Route path="/signUp" exact Component={SignUp} />
          <Route path="/login" exact Component={Login} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
