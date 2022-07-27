import React from "react";
 import { NavLink } from "react-router-dom";
function Dashboard() {
  return (
    <div className="fluid-container">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="page-content">
              <div className="side-panel">
                <span className="home-item">User Dashboard</span>
                <NavLink to="/createcategory" className="side-panel-item">
                  Create Category
                </NavLink>
                <NavLink to="/createproduct" className="side-panel-item">
                  Create Product
                </NavLink>
                <NavLink to="/manageproduct" className="side-panel-item">
                  Manage Product
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
