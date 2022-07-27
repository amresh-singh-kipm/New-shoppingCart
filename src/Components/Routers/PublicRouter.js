  import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateCategory from '../../Pages/CreateCategory';
import CreateProduct from '../../Pages/CreateProduct';
import Dashboard from '../../Pages/Dashboard';
import Home from '../../Pages/Home';
import Manageproduct from '../../Pages/Manageproduct';
import Signin from '../../Pages/Signin';
import Signup from '../../Pages/Signup';
import UpdateData from '../../Pages/UpdateData';
import Footer from '../Footer';
import Navbar from '../Navbar';
import Privateroute from './Privateroute';

  function PublicRouter() {
    return (
        <div>
            <Router>
            <Navbar/>
            <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route exact path="/signup" element={<Signup/>} />
              <Route exact path="/signin" element={<Signin/>} />
              <Route exact path="/dashboard"  element={<Privateroute><Dashboard/></Privateroute> } /> 
              <Route exact path="/createcategory" element={<Privateroute><CreateCategory/></Privateroute>}/>
              <Route exact path="/createproduct" element={<Privateroute><CreateProduct/></Privateroute>}/>
              <Route exact path="/manageproduct" element={<Privateroute><Manageproduct/></Privateroute>}/>
              <Route exact path="/updatedata" element={<Privateroute><UpdateData/></Privateroute>} />
            </Routes>
            <Footer/>
          </Router>
        </div>
    );
}
  
  export default PublicRouter