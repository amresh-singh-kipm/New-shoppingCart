import React, { useContext, useEffect } from "react";

function Dashboard() {
  return (
    <div className="fluid-container">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="page-content">
              <div className="side-panel">
                <span className="home-item">User Dashboard</span>
                <a href="/dashboard/createcategory" className="side-panel-item">
                  Create Category
                </a>
                <a href="/dashboard/createproduct" className="side-panel-item">
                  Create Product
                </a>
                <a href="/dashboard/manageproduct" className="side-panel-item">
                  Manage Product
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
