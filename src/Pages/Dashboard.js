import React from "react";
 import { NavLink } from "react-router-dom";
 import {FaUser} from 'react-icons/fa';
 import {BiCategoryAlt} from 'react-icons/bi';
 import {MdOutlineManageSearch} from 'react-icons/md';
 import {FaProductHunt} from 'react-icons/fa';
 import {SiGoogletagmanager} from 'react-icons/si'
function Dashboard() {
  let name = localStorage.getItem("userName")
  let email = localStorage.getItem("email")
  return (
    <div className="fluid-container">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12">
            <div className="admin-dashboard">
                <div className="admin-dashboard-title">
                 <img src="/assets/images/profile-image.jpg"/>
                 <div className="admin-info">
                 <p>{name}</p>
                  <p>{email}</p>
                 </div>
                </div>
                <NavLink to="/createcategory" className="admin-dashboard-item">
                  <div className="font-icon">
                  <BiCategoryAlt/> 
                  </div>
                 Create Category
                </NavLink>
                <NavLink to="/managecategory" className="admin-dashboard-item">
                <div className="font-icon">
                <MdOutlineManageSearch/> 
                  </div>
                  Manage Category
                </NavLink>
                <NavLink to="/createproduct" className="admin-dashboard-item">
                <div className="font-icon">
                <FaProductHunt/>
                  </div>
                   Create Product
                </NavLink>
                <NavLink to="/manageproduct" className="admin-dashboard-item">
                <div className="font-icon">
                <SiGoogletagmanager/>
                  </div>
                  Manage Product
                </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
