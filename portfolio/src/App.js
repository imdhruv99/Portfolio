import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./components/Navbar/Navbar.css";
import Header from "./components/Header/Header";
import  "./components/Header/Header.css";
import Footer from "./components/Footer/Footer";
import "./components/Footer/Footer.css"

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Footer />
    </div>
  );
};

export default App;