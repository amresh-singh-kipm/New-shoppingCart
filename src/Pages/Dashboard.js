import React from "react";

function Dashboard() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="side-panel">
            <h2>User Dashboard</h2>
            <hr />
            <span className="side-panel-item">Create A Product</span>
            <span className="side-panel-item">Manage A product</span>
            <span className="side-panel-item">View Product detail</span>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="col-lg-4">Dashboard</div>
          <div className="col-lg-4">Dashboard</div>
          <div className="col-lg-4">Dashboard</div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
