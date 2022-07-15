import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import Navbar from "./Components/Navbar";
import Createproduct from "./Pages/Createproduct";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/signin" element={<Signin />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/createproduct" element={<Createproduct/>}/>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
