import Header from "./component/layout/Header/Header.js";
import Footer from "./component/layout/Footer/Footer.js";
import './App.css';
import { useEffect, useState } from "react";
import WebFont from "webfontloader";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import React, { Fragment } from "react";
import Home from "./component/Home/Home.js"
import ProtectedRoute from "./component/Route/ProtectedRoute.js";
import Quiz from "./component/Quiz/quiz.js";
import Result from "./component/Result/result.js";
import Search from "./component/Product/Search.js"
import LoginSignUp from "./component/User/LoginSignUp.js";
import Contact from "./component/layout/Contact/Contact";
import About from "./component/layout/About/About";

function App() {
  
 
    
  
  //window.addEventListener("contextmenu", (e) => e.preventDefault());

  
    return (
      <Router>
        <Header />
        
        
        
        <Routes><Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />}/>
        <Route path="/result" element={<Result />}/>
        <Route path="/login" element={<LoginSignUp />} />
        <Route path="/search" element={<Search />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />



        </Routes>
        
        <Footer />
    </Router>
  );
}
export default App;
