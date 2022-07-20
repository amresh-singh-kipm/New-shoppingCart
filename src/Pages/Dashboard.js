import React ,{useContext, useEffect} from "react";
import { getData } from "../Helpers/AuthHelper";
import { AppContext } from "../Components/Context/AppContext";
function Dashboard() {
  const  dataValue = useContext(AppContext);
  useEffect(() => {
  getData().then((data)=>dataValue.setProductValue(data))
.catch((err)=>console.log(err))
console.log("dashboard data",dataValue?.productValue)
}, [])

  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="side-panel">
            <h2>User Dashboard</h2>
            <hr />

            <a href="/dashboard/createproduct" className="side-panel-item">Create A Product</a>
            <a href="/dashboard/manageproduct" className="side-panel-item">Manage A product</a>
            <a href="/dashboard/viewproduct" className="side-panel-item">View Product detail</a>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="col-lg-4"></div>
          <div className="col-lg-4"></div>
          <div className="col-lg-4"></div>
        </div>
      </div>
    </div>
    {dataValue?.productValue?.map((item)=>{
      return(<>{item.name} {item.price}  </>)
    })}
    </>
  );
}

export default Dashboard;
