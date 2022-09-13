  import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signin from '../../Pages/Signin';
import Signup from '../../Pages/Signup';
import Home from '../../Pages/Home';
import Dashboard from '../../Pages/Dashboard';
import CreateCategory from '../../Pages/CreateCategory';
import ManageCategory from '../../Pages/ManageCategory';
import CreateProduct from '../../Pages/CreateProduct';
import Manageproduct from '../../Pages/Manageproduct';
import UpdateData from '../../Pages/UpdateData';
import Privateroute from './Privateroute';
import Footer from '../Footer';
import UpdateCategory from '../../Pages/UpdateCategory';
import Usememo from '../../Pages/Usememo';
import Cart from '../../Pages/Cart';
import NavScrollExample from '../Navbar';
import Checkout from '../../Pages/Checkout';

  function PublicRouter() {
    return (
        <div>
            <Router>
            <NavScrollExample/>
            <Routes>
              <Route exact path='/memo' element={<Usememo/>}/>
              <Route exact path="/" element={<Home/>} />
              <Route exact path="/signup" element={<Signup/>} />
              <Route exact path="/signin" element={<Signin/>} />
              <Route exact path="/dashboard"  element={<Privateroute><Dashboard/></Privateroute> } /> 
              <Route exact path="/createcategory" element={<Privateroute><CreateCategory/></Privateroute>}/>
              <Route exact path="/createproduct" element={<Privateroute><CreateProduct/></Privateroute>}/>
              <Route exact path="/manageproduct" element={<Privateroute><Manageproduct/></Privateroute>}/>
              <Route exact path="/updatedata" element={<Privateroute><UpdateData/></Privateroute>} />
              <Route exact path="/updatecategory" element={<UpdateCategory/>}/>
              <Route exact path ="/managecategory" element={<ManageCategory/>}/>
              <Route exact path="/cart" element = {<Cart/>}/>
              <Route exact path="/checkout" element={<Checkout/>}/>
            </Routes>
            <Footer/>
          </Router>
        </div>
    );
}
  
  export default PublicRouter
