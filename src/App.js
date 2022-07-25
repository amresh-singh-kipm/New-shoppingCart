import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import Navbar from "./Components/Navbar";
import CreateCategory from "./Pages/CreateCategory";
import { AppContext } from "./Components/Context/AppContext";
import CreateProduct from "./Pages/CreateProduct";
import Manageproduct from "./Pages/Manageproduct";
import Footer from "./Components/Footer";
// import Privateroute from "./Components/Routers/Privateroute";

function App() {
  const [isSubmit, setIsSubmit] = useState(false);
  const [productValue, setProductValue] = useState();
  return (
    <AppContext.Provider
      value={{ isSubmit, setIsSubmit, productValue, setProductValue }}
    >
      <div className="App">
        <header className="App-header">
          <Router>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/signup" element={<Signup />} />
              <Route exact path="/signin" element={<Signin />} />
              <Route exact path="/dashboard" element={<Dashboard />} />
              <Route
                exact
                path="/dashboard/createcategory"
                element={<CreateCategory />}
              />
              <Route
                exact
                path="/dashboard/createproduct"
                element={<CreateProduct />}
              />
              <Route
                exact
                path="/dashboard/manageproduct"
                element={<Manageproduct />}
              />
            </Routes>
            <Footer/>
          </Router>
        </header>
      </div>
    </AppContext.Provider>
  );
}

export default App;
