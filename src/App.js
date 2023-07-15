import React, { useState } from "react";

import Categories from "./Categories";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Collection from "./Pages/Collection";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";

import Navbar from "./Navbar";
import { FloatingWhatsApp } from "react-floating-whatsapp";
function App() {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav> */}
        <Navbar />
        <Routes>
          <Route path="/collection" element={<Collection />} />
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
