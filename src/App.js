import React, { useState,useEffect } from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import PublicRouter from "./Components/Routers/PublicRouter";
import { AppContext } from "./Components/Context/AppContext";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [isSubmit, setIsSubmit] = useState(false);
  const id = localStorage.getItem("userId")
  const [productValue, setProductValue] = useState();
  let token = localStorage.getItem("token")
  useEffect(() => {
     if(token){
      setIsSubmit(true)
     }
    
  }, [])
  return (
   
    
    <AppContext.Provider
      value={{ isSubmit, setIsSubmit, productValue, setProductValue, }}
    >
      <div className="App">
        <header className="App-header">
          <PublicRouter/>
           <Router>
            <Routes>
              {/* <Privateroute element={<Dashboard/>} > </Privateroute> */}
              {/*<Route exact path="/" element={<Home />} />
              <Route exact path="/signup" element={<Signup />} />
              <Route exact path="/signin" element={<Signin />} />
              <Route exact path="/dashboard" element={<Dashboard />} />
              <Route exact path="/dashboard/createcategory" element={<CreateCategory />}/>
              <Route exact path="/dashboard/createproduct" element={<CreateProduct />}/>
              <Route exact path="/dashboard/manageproduct" element={<Manageproduct />}/>
              <Route exact path="/updatedata" element={<UpdateData />} />
            */}
              </Routes>
            
          </Router> 
        </header>
      </div>
    </AppContext.Provider>
  );
}

export default App;
